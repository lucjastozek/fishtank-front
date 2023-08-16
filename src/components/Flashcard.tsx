import FlashcardProps from "../interfaces/FlashcardProps";
import getFontSize from "../utils/getFontSize";

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
      className={`flashcard ${showAnswer} clickable`}
      onClick={() => {
        setShowAnswer((prev) => !prev);
      }}
    >
      {showAnswer === false ? (
        <h3 style={getFontSize(flashcard.question)}>{flashcard.question}</h3>
      ) : (
        <h3 style={getFontSize(flashcard.answer)}>{flashcard.answer}</h3>
      )}
      <p>Click to flip the card!</p>
    </div>
  );
}

export default Flashcard;
