import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Data from "./components/Data";

const { REACT_APP_API_KEY } = process.env;

function App() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}`
      );
      setItems(result.data);
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
