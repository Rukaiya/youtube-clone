import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const MAX_RETRY_ATTEMPTS = 3; // Maximum number of retry attempts
const RETRY_DELAY = 2000;
const options = {

  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


// export const fetchFromAPI = async (url, retryAttempts = 0) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     if (error.response && error.response.status === 429) {
//       if (retryAttempts < MAX_RETRY_ATTEMPTS) {
//         // Retry the request after a delay
//         await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
//         return fetchFromAPI(url, retryAttempts + 1);
//       } else {
//         throw new Error('Too many requests. Please try again later.');
//       }
//     } else {
//       throw new Error('Error fetching data:', error);
//     }
//   }
// };

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};