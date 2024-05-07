import React from "react";

export default function images(props) {
  if (props.item) {
    return (
      <div className="Images">
        <p>Hello</p>
      </div>
    );
  } else {
    return null;
  }
}
