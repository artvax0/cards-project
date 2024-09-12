import { useCallback, useEffect, useMemo, useState } from "react"
import { useSnack } from "../providers/SnackbarProvider";
import axios from 'axios'
import { likeCard, getAllMyCards, deleteCard, editCard, newCard, getCards } from "../services/cardApiService";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "./useAxios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useCurrentUser } from "../providers/UserProvider";

export default function useCards() {
    const [allCards, setAllCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();
    const [card, setCard] = useState([]);
    const navigate = useNavigate();
    const { user } = useCurrentUser();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const filteredCards = useMemo(() => allCards.filter((card) => card.title.includes(searchParams.get('q') || '')), [allCards, searchParams]);
    useAxios();

    const getAllCards = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCards();
            if (response.status >= 200 && response.status < 300) {
                setAllCards(response.data);
                setSnack("success", "All cards are here!");
            }
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const getCardById = useCallback(async (id, snackStatus = 'success', snackMsg = 'Card Loaded!') => {
        try {
            const { data } = await axios.get(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`);
            setCard(data);
            setSnack(snackStatus, snackMsg);
            setIsLoading(false);
            return (data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const getMyCards = useCallback(async () => {
        try {
            const response = await getAllMyCards();
            if (response.status >= 200 && response.status < 300) {
                setAllCards(response.data);
                setSnack('success', 'Loaded All Personal Cards!');
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
        setIsLoading(false);
    }, []);

    const handleNewCard = useCallback(async (newCardInfo) => {
        setIsLoading(true);
        try {
            const normalizedCardInfo = normalizeCard(newCardInfo);
            const response = await newCard(normalizedCardInfo);

            if (response.status >= 200 && response.status < 300) {
                setSnack('success', 'Added Card!');
                setTimeout(() => {
                    navigate('/cards');
                }, 1500);
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
        setIsLoading(false);
    }, []);

    const handleEditCard = useCallback(async (cardId, updatedCardInfo) => {
        setIsLoading(true);
        try {
            const normalizedCardInfo = normalizeCard(updatedCardInfo);
            const response = await editCard(cardId, normalizedCardInfo);

            if (response.status >= 200 && response.status < 300) {
                setSnack('success', 'Card Updated!');
                setTimeout(() => {
                    navigate('/cards');
                }, 1500);
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
        setIsLoading(false)
    }, []);

    const handleDelete = useCallback(async (cardId, bizNumber) => {
        try {
            const response = await deleteCard(cardId, bizNumber);

            if (response.status >= 200 && response.status < 300) {
                setSnack('success', 'Card Deleted!');
                if (location.pathname == '/my-cards') {
                    getMyCards();
                } else {
                    getAllCards();
                }
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
    }, []);

    const handleLike = useCallback(async (cardId) => {
        try {
            const response = await likeCard(cardId);

            if (response.status >= 200 && response.status < 300) {
                setSnack('success', 'Card like status updated!');
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
    }, []);

    const getFavCards = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCards();
            if (response.status >= 200 && response.status < 300) {
                if (user) setAllCards(response.data.filter((card) => card.likes.includes(user._id)));
                setSnack('success', 'Cards loaded!');
            }
        } catch (error) {
            console.log(error)
            setError(error.message);
            setSnack('error', error.message);
        }
        setIsLoading(false);
    }, [])

    return { filteredCards, allCards, card, error, isLoading, getAllCards, getCardById, getMyCards, handleNewCard, handleEditCard, handleDelete, handleLike, getFavCards };
}