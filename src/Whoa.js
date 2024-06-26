import React from "react";
import "./Whoa.css";

export default function Whoa(props) {
  if (props.data) {
    return (
      <div className="Whoa">
        {props.data.map(function (element, index) {
          return (
            <div key={index} className="row">
              <div className="col-md-6">
                <h5>Movie: {element.movie}</h5>
                <h6>Director: {element.director}</h6>
                <p>
                  Character: {element.character}
                  <br />
                  Line: {element.full_line}
                  <br />
                  Time: {element.timestamp}
                  <br />
                  Total Whoa in this movie: {element.total_whoas_in_movie}
                </p>
              </div>
              <div className="col-md-6">
                <video
                  src={element.video["360p"]}
                  controls
                  className="img-fluid"
                >
                  Video not available
                </video>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
