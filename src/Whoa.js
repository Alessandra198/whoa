import React from "react";

export default function Whoa(props) {
  if (props.data) {
    return (
      <div className="Whoa">
        {props.data.map(function (element, index) {
          return (
            <div key={index}>
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
              <div>
                <audio controls src={element.audio}>
                  {" "}
                  controlsAudio
                </audio>
              </div>
              <div>
                <video src={element.video} controls></video>
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
