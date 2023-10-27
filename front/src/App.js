import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://ke183a767cf46a.user-app.krampoline.com:8080/api/home")
      .then((response) => {
        setData(response.data);
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
