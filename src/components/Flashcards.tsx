import { useState } from "react";
import FlashcardProps from "../interfaces/FlashcardProps";
import Flashcard from "./Flashcard";

interface FlashcardsProps {
  flashcards: FlashcardProps[];
  name: string;
}

function Flashcards({ flashcards, name }: FlashcardsProps): JSX.Element {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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

  return (
    <main>
      <h1>{name}</h1>
      <div className="interface">
        <button onClick={handleBack} className="clickable">
          <img src="./static/arrowLeft.svg" alt="arrow left" />
        </button>
        {flashcards.length > 0 ? (
          <Flashcard
            flashcard={flashcards[index]}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
        ) : (
          <Flashcard
            flashcard={{
              id: 1,
              collection: 1,
              question: "are the flashcards loading?",
              answer: "yes!",
            }}
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
