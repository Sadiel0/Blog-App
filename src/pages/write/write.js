import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img 
      className="writeImg"
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story.." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Submit</button>
      </form>
    </div>
  );
}
