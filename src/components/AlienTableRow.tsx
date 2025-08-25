import React from "react";
import { Alien } from "../types/alien.types";

interface AlienTableRowProps {
  alien: Alien;
  onClick: () => void;
}

const AlienTableRow: React.FC<AlienTableRowProps> = ({ alien, onClick }) => {
  return (
    <div className="alien-row" onClick={onClick}>
      <div className="row-cell first-name" data-label="First Name:">
        {alien.firstName}
      </div>
      <div className="row-cell last-name" data-label="Last Name:">
        {alien.lastName}
      </div>
      <div className="row-cell id-number" data-label="ID:">
        <span className="highlighted-text">#{alien.id}</span>
      </div>
      <div className="row-cell rank" data-label="Rank:">
        <span className="highlighted-text">{alien.type.toLowerCase()}</span>
      </div>
      <div className="row-cell arrow">{">"}</div>
    </div>
  );
};

export default AlienTableRow;
