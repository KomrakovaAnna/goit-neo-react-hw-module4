import axios from "axios";

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page: 12 },
      headers: {
        Authorization: `Client-ID CW9KmnMzohjQkR4oZYY07eltnkEo3Eb-fRLpqUH-wVQ`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(`error: ${error.message}`);
    throw new Error("Failed to fetch images");
  }
};
