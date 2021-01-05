import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
