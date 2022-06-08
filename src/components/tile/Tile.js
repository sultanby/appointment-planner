import React from "react";

export const Tile = ({contact}) => {
  return (
    <div className="tile-container">
      {Object.values(contact).map((data, index) => (
        <p key={index} className={`${index===0 ? 'tile-title' : ''} tile`}>
          {data}
        </p>
      ))}
    </div>
  );
};
