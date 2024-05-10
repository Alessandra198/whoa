import React from "react";
import axios from "axios";
import "./Find.css";

export default function Find() {
  function handleResponse(response) {
    console.log(response.data);
  }

  function getRandom(event) {
    event.preventDefault();
    let apiUrl = "https://whoa.onrender.com/whoas/random";

    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Find">
      <main className="text-center">
        <button type="submit" onClick={getRandom}>
          Find me a Whoa
        </button>
      </main>
    </div>
  );
}
