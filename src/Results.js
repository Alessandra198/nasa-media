import React from "react";
import Images from "./Images";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h6>Here's what we found👩‍🚀👨‍🚀</h6>
        <div>
          {props.data.maps(function (item, index) {
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
//data.collection.items - array
//data.collection.items[].href - image url
//                       or
//data.collection.items[].links[0].href - image url
//data.collection.items[].data[0].description
//data.collection.items[].data[0].title
