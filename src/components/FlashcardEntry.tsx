import { useState } from "react";
import axios from "axios";
import fetchFlashcards from "../utils/fetchFlashcards";
import FlashcardProps from "../interfaces/FlashcardProps";

interface FlashcardEntryProps {
  id: number;
  setMain: React.Dispatch<React.SetStateAction<string>>;
  flashcards: FlashcardProps[];
  setFlashcards: React.Dispatch<React.SetStateAction<FlashcardProps[]>>;
  name: string;
}

function FlashcardEntry({
  id,
  setMain,
  flashcards,
  setFlashcards,
  name,
}: FlashcardEntryProps): JSX.Element {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleClick() {
    // creates a set with the given title
    await axios.post(`https://zagadnieniator.onrender.com/collections/${id}`, {
      question: question,
      answer: answer,
    });

    fetchFlashcards(setFlashcards, id);
    setQuestion("");
    setAnswer("");
  }

  function handleMainChange() {
    setMain("flashcards");
  }

  return (
    <main className="flashcard-entry">
      <h1>{name}</h1>
      <div className="input-row">
        <input
          type="text"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          autoFocus
          placeholder="question (front)"
          className="entry question"
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          placeholder="answer (back)"
          className="entry answer"
        />
        <button onClick={handleClick} className="add clickable f-entry">
          <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
          add
        </button>
      </div>

      <table>
        <tr>
          <th>Question</th>
          <th>Answer</th>
        </tr>

        {flashcards.map((flashcard) => (
          <tr key={flashcard.id}>
            <td className="q">{flashcard.question}</td>
            <td className="a">{flashcard.answer}</td>
          </tr>
        ))}
      </table>

      <button className="success clickable" onClick={handleMainChange}>
        <i className="fa-solid fa-check" style={{ color: "#101213" }} />
        finish
      </button>
    </main>
  );
}

export default FlashcardEntry;
