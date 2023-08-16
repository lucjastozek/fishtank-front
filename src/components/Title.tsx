import { useState } from "react";
import axios from "axios";

interface TitleProps {
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setChosenSet: React.Dispatch<React.SetStateAction<number>>;
}

function Title({ setMain, setChosenSet }: TitleProps): JSX.Element {
  const [title, setTitle] = useState("");

  async function handleClick() {
    // creates a set with the given title
    const response = await axios.post(
      `https://zagadnieniator.onrender.com/collections/`,
      {
        name: title,
      }
    );

    const setId = response.data.data.createdCollection.rows[0].id;

    setChosenSet(setId);

    setMain("flashcardEntry");
  }

  return (
    <main className="title-pick">
      <h1>Choose a title!</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
        autoFocus
      />
      <button className="clickable primary" onClick={handleClick}>
        <i className="fa-solid fa-arrow-right" style={{ color: "#101213" }}></i>{" "}
        add flashcards
      </button>
    </main>
  );
}

export default Title;
