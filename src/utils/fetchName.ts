import axios from "axios";

async function fetchName(
  setName: React.Dispatch<React.SetStateAction<string>>,
  id: number
) {
  const response = await axios.get(
    `https://zagadnieniator.onrender.com/collections/${id}`
  );

  const jsonBody = response.data;

  setName(jsonBody.data.collections.rows[0].name);
}

export default fetchName;
