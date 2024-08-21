import axios from "axios";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const newCard = async (normalizedCardInfo) => {
  try {
    const {data} = await axios.post(apiUrl, normalizedCardInfo);
    return data;
  } catch (error) {
    throw new Error (error.response.data);
  }
}