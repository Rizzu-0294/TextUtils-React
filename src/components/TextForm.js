import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Upper case ", "success");
  };
  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case ", "success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText(" ");
    props.showAlert("You've cleared the entire text  ", "danger");
  };
  const extraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed   ", "primary");
  };
  const Copytext = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Entire text has been copied ", "success");
  };

  const [text, setText] = useState("");
  // setText("Start writing here")
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-success mx-1"
          onClick={handleupclick}
        >
          Convert to UpperCase
        </button>
        <button
          type="submit"
          className="btn btn-outline-success my-2 mx-1"
          onClick={handleloclick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-outline-danger my-2 mx-1"
          onClick={clearText}
        >
          Clear
        </button>
        <button
          className="btn btn-outline-primary my-2 mx-1"
          onClick={extraspace}
        >
          Remove_E_space
        </button>
        <button
          className="btn btn-outline-secondary my-2 mx-1"
          onClick={Copytext}
        >
          CopyText
        </button>
      </div>
      <div
        className="container my-2 "
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        {/* <p>{0.008 * text.split(" ").length} Minutes read </p> */}
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here "}</p>
      </div>
    </>
  );
}
