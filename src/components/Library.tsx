import SetProps from "../interfaces/SetProps";
import SetTile from "./SetTile";

interface LibraryProps {
  sets: SetProps[];
}

function Library({ sets }: LibraryProps): JSX.Element {
  return (
    <main className="library">
      <h1>Library</h1>
      <div className="tiles">
        {sets.map((set) => (
          <SetTile
            id={set.id}
            owner_id={set.owner_id}
            name={set.name}
            key={set.id}
          />
        ))}
      </div>
      <button className="add">
        <i className="fa-solid fa-plus" style={{ color: "#fff9f5" }}></i> add a
        new set
      </button>
    </main>
  );
}

export default Library;
