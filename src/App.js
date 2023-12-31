import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled ", "success");
      document.title = "TextUtils-Dark-Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled ", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtiles"
        mode={mode}
        togglemode={togglemode}
        about="About Us"
      />
      {/* <Alert alert={alert} /> */}
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text below to Analyze "
          mode={mode}
        />
        {/* exact path="/about" element={<About title="About Us" mode={mode} />} */}
      </div>
    </>
  );
}

export default App;
