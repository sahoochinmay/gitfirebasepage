import logo from "./logo.svg";
import "./App.css";
import { foodsRef } from "./config/firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    let arr = [];
    foodsRef
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          arr.push(doc.data());
        });
        console.log(arr)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
