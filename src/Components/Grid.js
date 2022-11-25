import React from "react";

export default function Grid({ data }) {
  return (
    <div>
      <div className="container text-center">
      <div className="row">
            <div className="col"><h4>Name</h4></div>
            <div className="col"><h4>Description</h4></div>
            <div className="col"><h4>Price</h4></div>
          </div>
        {
        data.map((element,key) => {
          return(
          <div className="row" key={key}>
            <div className="col">{element.name}</div>
            <div className="col">{element.description}</div>
            <div className="col">{element.price}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
}
