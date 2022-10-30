import React from "react";
import "../../../src/App.css";

let MovieCard = ({ movies }) => {
  return (
    <React.Fragment>
      <div key={movies.Year} className="film">
        <div className="filmposter">
          <img
            src={
              movies.Poster !== "N/A"
                ? movies.Poster
                : "https://via.placeholder.com/400"
            }
            alt="filmposter"
          />
        </div>
        <div className="filmdetails">
          <div className="filmyear">{movies.Year}</div>
          <div className="details">
            <div className="filmname">{movies.Title}</div>
            <div className="yearinfo">
              <div className="filmyear2">{movies.Year}</div>
              <div className="filminfo">{movies.Type}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
