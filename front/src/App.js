import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://ke183a767cf46a.user-app.krampoline.com:8080/api/api/home")
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
