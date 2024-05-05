import React from "react";

export default function Search() {
  return (
    <div>
      <h3>What are you looking for?</h3>
<form>
    <input type="search" placeholder="Ex. Moon, Apollo 11" />
    <input type="submit" value="Submit" />
</form>
    </div>
  );
}
