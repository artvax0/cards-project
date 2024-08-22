import axios from "axios";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const newCard = async (normalizedCardInfo) => {
  try {
    const response = await axios.post(apiUrl, normalizedCardInfo);
    return response;
  } catch (error) {
    throw new Error (error.response.data);
  }
}

export const editCard = async (cardId, normalizedCardInfo) => {
  try {
    const response = await axios.put(apiUrl + `/${cardId}`, normalizedCardInfo);
    return response;
  } catch (error) {
    throw new Error (error.response.data)
  }
}