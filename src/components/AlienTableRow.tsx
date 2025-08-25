import React from 'react';
import { Alien } from '../types/alien.types';

interface AlienTableRowProps {
  alien: Alien;
  onClick: () => void;
}

const AlienTableRow: React.FC<AlienTableRowProps> = ({ alien, onClick }) => {
  return (
    <div className="alien-row" onClick={onClick}>
      <div className="row-cell first-name">{alien.firstName}</div>
      <div className="row-cell last-name">{alien.lastName}</div>
      <div className="row-cell id-number">
        <span className="highlighted-text">#{alien.id}</span>
      </div>
      <div className="row-cell rank">
        <span className="highlighted-text">{alien.type.toLowerCase()}</span>
      </div>
      <div className="row-cell arrow">{'>'}</div>
    </div>
  );
};

export default AlienTableRow;