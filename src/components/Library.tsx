import SetProps from "../interfaces/SetProps";
import SetTile from "./SetTile";

interface LibraryProps {
  sets: SetProps[];
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setChosenSet: React.Dispatch<React.SetStateAction<number>>;
}

function Library({ sets, setMain, setChosenSet }: LibraryProps): JSX.Element {
  return (
    <main className="library">
      <h1>Library</h1>
      <div className="tiles">
        {sets.map((set) => (
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
