import React from "react";

export const Tile = ({ item }) => {
  return (
    <div className="tile-container" >
      {Object.keys(item).map((key, idx) => (
        <p className={idx === 0 ? 'tile-title' : 'tile'} style={{margin: 0}}>{key}: {item[key]}</p>
      ))}
    </div>
  );
};
