import React from "react";

export default function images(props) {
  if (props.item) {
    return (
      <div className="Images">
        <p>{props.item.data[0].description}</p>
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
