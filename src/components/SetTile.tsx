import SetProps from "../interfaces/SetProps";

interface SetTileProps {
  set: SetProps;
  setMain: React.Dispatch<React.SetStateAction<string>>;
  setChosenSet: React.Dispatch<React.SetStateAction<number>>;
}

function SetTile({ set, setMain, setChosenSet }: SetTileProps): JSX.Element {
  function handleTileClick() {
    setChosenSet(set.id);
    setMain("activities");
  }

  return (
    <div className="tile" onClick={handleTileClick}>
      <h3>{set.name}</h3>
      <p>Progress</p>
      <div className="progress-info">
        <div className="progress-bar" style={{ width: "15vw" }}>
          <div className="progress" style={{ width: "10vw" }}></div>
        </div>
        <p className="percent">67%</p>
      </div>
    </div>
  );
}

export default SetTile;
