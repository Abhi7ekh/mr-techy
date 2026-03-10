import { useState } from "react";

import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

import "./styles/global.css";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? <MainPage /> : <HomePage enterSite={() => setEntered(true)} />}
    </>
  );
}

export default App;
