import React from "react";
import Images from "./Images";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h6>Here's what we found👩‍🚀👨‍🚀</h6>
        <div>
          {props.data.items.map(function (item, index) {
            return (
              <div key={index}>
                <Images item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
