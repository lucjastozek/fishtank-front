import "./styles.css";
import PageHeader from "./components/PageHeader";
import { useState, useEffect } from "react";
import SetProps from "./interfaces/SetProps";
import axios from "axios";
import Library from "./components/Library";
import Activities from "./components/Activities";
import Flashcard from "./components/Flashcard";
import Flashcards from "./components/Flashcards";

function App(): JSX.Element {
  interface ScreensProps {
    [key: string]: JSX.Element;
  }
  const [sets, setSets] = useState<SetProps[]>([]);
  const [main, setMain] = useState("library");
  const [chosenSet, setChosenSet] = useState(0);

  useEffect(() => {
    async function fetchCollections() {
      const response = await axios.get(
        "https://zagadnieniator.onrender.com/collections"
      );

      const jsonBody = response.data;

      setSets(jsonBody.data.collections.rows);
    }
    fetchCollections();
  }, []);

  return (
    <div>
      <PageHeader setMain={setMain} />
      {main === "library" && (
        <Library sets={sets} setChosenSet={setChosenSet} setMain={setMain} />
      )}

      {main === "activities" && <Activities id={chosenSet} setMain={setMain} />}

      {main === "flashcards" && <Flashcards id={chosenSet} />}
      <img className="background" src="./static/waves.svg" alt="waves" />
    </div>
  );
}

export default App;
