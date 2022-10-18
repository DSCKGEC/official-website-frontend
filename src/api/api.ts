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

export const getCounts = async () => {
  try {
    const response = await axios.get(`${baseURL}users/allcounts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const allProjects = async () => {
  try {
    const response = await axios.get(`${baseURL}projects/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const allEvents = async () => {
  try {
    const response = await axios.get(`${baseURL}events/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const allBlogs = async () => {
  try {
    const response = await axios.get(`${baseURL}blogs/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}