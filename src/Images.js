import React from "react";

export default function Images(props) {
  if (!props.item || !props.item.data || props.item.data.length === 0) {
    return null; // If props.item is undefined or doesn't have data, return null
  }

  const link =
    props.item.links && props.item.links.length > 0
      ? props.item.links[0].href
      : null;
  const title = props.item.data[0].title;
  const description = props.item.data[0].description;

  return (
    <div className="Images">
      <div className="container">
        <div className="row">
          <p>{title}</p>
          {link && <img src={link} alt={title} className="img-fluid" />}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

//data.collection.items - array
//data.collection.items[].href - image url
//                       or
//data.collection.items[].links[0].href - image url
//data.collection.items[].data[0].description
//data.collection.items[].data[0].title
