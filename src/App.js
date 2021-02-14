import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Data from "./components/Data";

const API_KEY = "SsGcHE86HKtzR0YlSGb1P3bPaARMs3jOhalFaxsh";

function App() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        // `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
      );

      setItems(result.data);
      console.log(result.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <Header />
      <Data items={items} />
    </div>
  );
}

export default App;
