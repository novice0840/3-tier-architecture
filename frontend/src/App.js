import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [backend, setBackend] = useState(false);
  const [database, setDatabase] = useState(false);

  useEffect(() => {
    // https://jsonplaceholder.typicode.com/comments
    const APIcall = async () => {
      try {
        const backendResult = await axios.get("http://localhost:3001/backend");
        if (backendResult) setBackend(true);
      } catch (error) {
        console.log(error);
      }

      try {
        const databaseResult = await axios.get("http://localhost:3001/database");
        if (databaseResult) setDatabase(true);
      } catch (error) {
        console.log(error);
      }
    };
    APIcall();
  }, []);

  return (
    <div className="App">
      <h1>Frontend 연결됨</h1>
      <h1>{backend ? "Backend 연결됨" : "Backend 연결되지 않음"}</h1>
      <h1>{database ? "Database 연결됨" : "Database 연결되지 않음"}</h1>
    </div>
  );
}

export default App;
