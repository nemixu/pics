import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID lzchjoKletydQq2Xl6q1Jfk3A_CKcZHZO_spJfUiNro",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
