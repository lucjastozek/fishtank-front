import SetProps from "../interfaces/SetProps";

function SetTile({ id, owner_id, name }: SetProps): JSX.Element {
  return (
    <div className="tile">
      <h3>{name}</h3>
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
