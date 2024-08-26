import React, { useEffect } from 'react'
import UserProfile from '../components/UserProfile'
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';
import useUsers from '../hooks/useUsers';
import { useCurrentUser } from '../providers/UserProvider';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

export default function ProfilePage() {
  const { userData, handleGetUser, error, isLoading } = useUsers();
  const { user } = useCurrentUser();

  useEffect(() => {
    if (user && user._id) {
      const getUser = async () => {
        await handleGetUser(user._id);
      }
      getUser();
    }
  }, [user]);

  if (!user) return <Navigate to={ROUTES.LOGIN} replace />
  if (isLoading) return <Spinner />
  if (error) return <Error />
  if (userData && Object.keys(userData).length > 0) return <UserProfile title='User Profile' styles={{ maxWidth: '800px' }} userData={userData} isLoading={isLoading} error={error} />

  return null;
}
