import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://10.231.55.230:8080/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log.error("ERROR: ", error);
      });
  }, []);

  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
