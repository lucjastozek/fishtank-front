import { useState } from "react";
import axios from "axios";
import FlashcardProps from "../interfaces/FlashcardProps";
import Flashcard from "./Flashcard";

interface FlashcardsProps {
  id: number;
}

function Flashcards({ id }: FlashcardsProps): JSX.Element {
  const [name, setName] = useState("");
  const [flashcards, setFlashcards] = useState<FlashcardProps[]>([]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  async function fetchName() {
    const response = await axios.get(
      `https://zagadnieniator.onrender.com/collections/${id}`
    );

    const jsonBody = response.data;

    setName(jsonBody.data.collections.rows[0].name);
  }

  async function fetchFlashcards() {
    const response = await axios.get(
      `https://zagadnieniator.onrender.com/collections/${id}/flashcards`
    );

    const jsonBody = response.data;

    setFlashcards(jsonBody.data.collection.rows);
  }

  function handleBack() {
    if (index === 0) {
      setIndex(flashcards.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
    setShowAnswer(false);
  }

  function handleNext() {
    if (index === flashcards.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }

    setShowAnswer(false);
  }

  fetchName();
  fetchFlashcards();
  return (
    <main>
      <h1>{name}</h1>
      <div className="interface">
        <button onClick={handleBack} className="clickable">
          <img src="./static/arrowLeft.svg" alt="arrow left" />
        </button>
        {flashcards.length > 0 && (
          <Flashcard
            flashcard={flashcards[index]}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
        )}
        <button onClick={handleNext} className="clickable">
          <img src="./static/arrowRight.svg" alt="arrow right" />
        </button>
      </div>
    </main>
  );
}

export default Flashcards;
