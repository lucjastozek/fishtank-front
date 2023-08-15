import axios from "axios";
import FlashcardProps from "../interfaces/FlashcardProps";

async function fetchFlashcards(
  setFlashcards: React.Dispatch<React.SetStateAction<FlashcardProps[]>>,
  id: number
) {
  const response = await axios.get(
    `https://zagadnieniator.onrender.com/collections/${id}/flashcards`
  );

  const jsonBody = response.data;

  setFlashcards(jsonBody.data.collection.rows);
}

export default fetchFlashcards;
