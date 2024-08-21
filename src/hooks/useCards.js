import { useCallback, useState } from "react"
import { useSnack } from "../providers/SnackbarProvider";
import axios from 'axios'
import { newCard } from "../services/cardApiService";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "./useAxios";

export default function useCards() {
    const [allCards, setAllCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();
    const [card, setCard] = useState([]);
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

    const getCardById = useCallback(async (id) => {
        try {
            const response = await axios.get(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`);
            setCard([response.data]);
            setSnack("success", "Card loaded!");
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
            if (response.status == 200) {
                setSnack('success', 'Added Card!');
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        }
        setIsLoading(false);
    })

    const handleDelete = (id) => {
        console.log(`Delete ${id}`);
    }

    const handleLike = (id) => {
        console.log(`Liking ${id}`);
    }

    return {allCards, card, error, isLoading, getAllCards, getCardById, handleNewCard, handleDelete, handleLike };
}