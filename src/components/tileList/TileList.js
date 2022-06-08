import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map((contact, index) => {
        <Tile contact={contact} key={index} />
      })}
    </div>
  );
};
