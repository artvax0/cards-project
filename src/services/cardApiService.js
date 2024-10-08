import axios from "axios";
// const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";
const apiUrl = "https://cardsserver-cy4s.onrender.com/cards";

export const getCards = async () => {
  try {
    return await axios.get(apiUrl);
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export const getACardById = async (cardId) => {
  try {
    const response = await axios.get(apiUrl + `/${cardId}`)
    return response;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export const newCard = async (normalizedCardInfo) => {
  try {
    const response = await axios.post(apiUrl, normalizedCardInfo);
    return response;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export const editCard = async (cardId, normalizedCardInfo) => {
  try {
    const response = await axios.put(apiUrl + `/${cardId}`, normalizedCardInfo);
    return response;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export const deleteCard = async (cardId, bizNumber) => {
  try {
    return await axios.delete(apiUrl + `/${cardId}`, { "bizNumber": bizNumber });
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export const getAllMyCards = async () => {
  try {
    return await axios.get(apiUrl + `/my-cards`);
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export const likeCard = async (cardId) => {
  try {
    return await axios.patch(apiUrl + `/${cardId}`);
  } catch (error) {
    throw new Error(error.response.data);
  }
}