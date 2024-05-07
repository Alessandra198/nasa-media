import React from "react";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h6>Hello</h6>
      </div>
    );
  } else {
    return null;
  }
}
