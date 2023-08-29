import axios from "axios";

const apiKey = "AIzaSyCkndErMqjAmZnGiVd5CFyE4dNdavwc13c"; // Replace with your API key

export const fetchBooks = async (any) => {
  try {
    if (any.trim() !== "") {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          any
        )}&key=${apiKey}`
      );
      return res.data.items || [];
    } else {
    return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
