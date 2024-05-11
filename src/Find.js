import React, { useState } from "react";
import axios from "axios";
import Whoa from "./Whoa";
import "./Find.css";

export default function Find() {
  let [data, setData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setData(response.data);
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
      <Whoa data={data} />
    </div>
  );
}
