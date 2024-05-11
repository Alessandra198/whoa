import React from "react";

export default function Whoa(props) {
  if (props.data) {
    return (
      <div className="Whoa">
        {props.data.map(function (element, index) {
          return <div key={index}>{element.full_line}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
