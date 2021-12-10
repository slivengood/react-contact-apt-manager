import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div style={{border: '1px solid black', borderRadius: 10, padding: 10}}>
      {list.map(item => <Tile item={item} />)}
    </div>
  );
};
