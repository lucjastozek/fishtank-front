import { useState } from "react";
import axios from "axios";

function Title(): JSX.Element {
  const [title, setTitle] = useState("");

  async function handleClick() {
    // creates a set with the given title
    await axios.post(`https://zagadnieniator.onrender.com/collections/`, {
      name: title,
    });
  }

  return (
    <main className="title">
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
