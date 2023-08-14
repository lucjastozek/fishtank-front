import FlashcardProps from "../interfaces/FlashcardProps";

interface CardProps {
  flashcard: FlashcardProps;
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

function Flashcard({
  flashcard,
  showAnswer,
  setShowAnswer,
}: CardProps): JSX.Element {
  return (
    <div
      className={`flashcard ${showAnswer}`}
      onClick={() => {
        setShowAnswer((prev) => !prev);
      }}
    >
      {showAnswer === false ? (
        <h3>{flashcard.question}</h3>
      ) : (
        <h3>{flashcard.answer}</h3>
      )}
      <p>Click to flip the card!</p>
    </div>
  );
}

export default Flashcard;
