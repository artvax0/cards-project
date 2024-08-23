import { useCallback, useState } from "react"
import { useSnack } from "../providers/SnackbarProvider";
import axios from 'axios'
import { deleteCard, editCard, newCard } from "../services/cardApiService";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";

export default function useCards() {
    const [allCards, setAllCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();
    const [card, setCard] = useState([]);
    const navigate = useNavigate();
    useAxios();

    const getAllCards = useCallback(async () => {
        try {
            const response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
            setAllCards(response.data);
            setSnack("success", "All cards are here!");
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const getCardById = useCallback(async (id, snackStatus='success', snackMsg='Card Loaded!') => {
        try {
            const {data} = await axios.get(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`);
            setCard(data);
            setSnack(snackStatus, snackMsg);
            setIsLoading(false);
            return(data);
        } catch (error) {
            setError(error.message);
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
    },[])

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
    },[])

    const handleDelete = useCallback(async (cardId, bizNumber) => {
        try {
            const response = await deleteCard(cardId, bizNumber);

            if (response.status >= 200 && response.status < 300) {
                setSnack('success', 'Card Deleted!');
                setTimeout(() => {
                    location.reload();
                }, 1500);
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
    },[])

    const handleLike = (id) => {
        console.log(`Liking ${id}`);
    }

    return {allCards, card, error, isLoading, getAllCards, getCardById, handleNewCard, handleEditCard, handleDelete, handleLike };
}