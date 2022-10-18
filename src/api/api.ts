import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEND_URL;

export const fetchShortUrl = async (url: string) => {
  try {
    const response = await axios.post(`${baseURL}users/short`, {
      shortUrl: url,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
