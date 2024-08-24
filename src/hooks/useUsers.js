import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { login, signup } from "../services/userApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../providers/SnackbarProvider";

export default function useUsers () {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const {setUser, setToken} = useCurrentUser();
  const navigate = useNavigate();
  const setSnack = useSnack();

  const handleLogin = useCallback(async (userLogin) => {
    setIsLoading(true);
    try {
      const token = await login(userLogin);
      setTokenInLocalStorage(token);
      setToken(token);
      setUser(getUser());
      navigate(ROUTES.CARDS);
    } catch (error) {
      setError(error.message);
      setSnack("error", error.message);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    location.reload();
  }, []);

  const handleRegister = useCallback(async (signupInfo) => {
    setIsLoading(true);
    try {
      const normalizedSignupInfo = normalizeUser(signupInfo);
      await signup(normalizedSignupInfo);
      await handleLogin({email: signupInfo.email, password: signupInfo.password});
    } catch (error) {
      setError(error.message);
      setSnack("error", error.message);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, handleLogin, handleLogout, handleRegister };
}