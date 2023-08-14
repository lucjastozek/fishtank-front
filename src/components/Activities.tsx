import { useState } from "react";
import SetProps from "../interfaces/SetProps";
import axios from "axios";

interface ActivitiesProps {
  id: number;
}

function Activities({ id }: ActivitiesProps): JSX.Element {
  const [set, setSet] = useState<SetProps>();

  async function fetchSet() {
    const response = await axios.get(
      `https://zagadnieniator.onrender.com/collections/${id}`
    );

    const jsonBody = response.data;

    setSet(jsonBody.data.collections.rows[0]);
  }

  fetchSet();
  return (
    <main className="activity-screen">
      <h1>{set !== undefined ? set.name : ""}</h1>
      <p>Choose the activity!</p>
      <div className="activities">
        <div className="activity">
          <p>flashcards</p>
          <img src="./static/flashcards.png" alt="flashcards" />
        </div>
        <div className="activity">
          <p>learn</p>
          <img src="./static/brain.png" alt="flashcards" />
        </div>
        <div className="activity">
          <p>test</p>
          <img src="./static/exam.png" alt="flashcards" />
        </div>
      </div>
    </main>
  );
}

export default Activities;
