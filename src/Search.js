import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [value, setValue] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setValue(event.target.value);
    callAxios();
  }

  function handleResponse(response) {
    console.log(response);
  }

  function callAxios() {
    //const apiKey = "3Q8jVZT959Smky3PiaFSzMegTxXQxyfBbbBQKrhG";
    let apiUrl = `https://images-api.nasa.gov/search?q=${value}`;

    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Search">
      <h3>What are you looking for?</h3>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Ex. Moon, Apollo 11" className="search"/>
        <input type="submit" value="Submit" className="button"/>
      </form>
    </div>
  );
}
