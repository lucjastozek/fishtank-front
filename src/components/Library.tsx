import { useState } from "react";
import SetProps from "../interfaces/SetProps";
import SetTile from "./SetTile";

interface LibraryProps {
  sets: SetProps[];
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setChosenSet: React.Dispatch<React.SetStateAction<number>>;
}

function Library({ sets, setMain, setChosenSet }: LibraryProps): JSX.Element {
  const [keywords, setKeywords] = useState("");
  return (
    <main className="library">
      <h1>Library</h1>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search by the title..."
      />
      {sets.length < 1 && (
        <h2>
          Hi! <br />
          The server is currently waking up due to its previous inactivity.
          <br />
          Please allow some time for the sets to load.
          <br />
          Thank you for your patience!
        </h2>
      )}
      <div className="tiles">
        {sets
          .filter((set) =>
            set.name.toLowerCase().includes(keywords.toLowerCase())
          )
          .map((set) => (
            <SetTile
              set={set}
              setChosenSet={setChosenSet}
              setMain={setMain}
              key={set.id}
            />
          ))}
      </div>
      <button
        className="add clickable"
        onClick={() => {
          setMain("title");
        }}
      >
        <i className="fa-solid fa-plus" style={{ color: "#fff9f5" }}></i> add a
        new set
      </button>
    </main>
  );
}

export default Library;
