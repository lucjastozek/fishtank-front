import SetTile from "./SetTile";
import SetProps from "../interfaces/SetProps";
import { useState } from "react";

interface MySetsProps {
  userSets: SetProps[];
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setChosenSet: React.Dispatch<React.SetStateAction<number>>;
}

function MySets({ userSets, setMain, setChosenSet }: MySetsProps): JSX.Element {
  const [keywords, setKeywords] = useState("");
  return (
    <main className="library">
      <h1>My sets</h1>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search by the title..."
      />
      <div className="tiles">
        {userSets
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

export default MySets;
