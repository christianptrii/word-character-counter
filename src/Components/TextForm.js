import React, { useState } from "react";
import './TextForm.css'; // Import file CSS

const TextForm = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div className="text-form-container">
      <h1>Enter Your Paragraph</h1>
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          rows={8}
          value={text}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div className="button-group">
        <button className="btn btn-primary" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
      </div>

      <div className="result-container">
        <h2>Total Characters: </h2>
        <p>{text.length}</p>
        <h2>Total Words: </h2>
        <p>{text.trim().split(/\s+/).length}</p>
        <h2>Final Text to Read: </h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
