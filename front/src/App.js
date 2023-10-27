import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/home")
      .then((response) => {
        const responseData = JSON.parse(response.data);
        setData(responseData);
      })
      .catch((error) => {
        console.error("ERROR: ", error);
      });
  }, []);

  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
