import "./styles.css";
import PageHeader from "./components/PageHeader";
import { useState, useEffect } from "react";
import SetProps from "./interfaces/SetProps";
import axios from "axios";
import Library from "./components/Library";

function App(): JSX.Element {
  interface ScreensProps {
    [key: string]: JSX.Element;
  }
  const [user, setUser] = useState(1);
  const [sets, setSets] = useState<SetProps[]>([]);
  const [main, setMain] = useState("library");
  const [screens, setScreens] = useState<ScreensProps>({
    library: <Library sets={sets} />,
  });

  useEffect(() => {
    const obj = { ...screens };
    obj["library"] = <Library sets={sets} />;
    setScreens(obj);
  }, [sets]);

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
      <PageHeader />
      {screens[main]}
      <img className="background" src="./static/waves.svg" alt="waves" />
    </div>
  );
}

export default App;
