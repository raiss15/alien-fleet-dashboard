import React from "react";
import { useNavigate } from "react-router-dom";
import { Alien } from "../types/alien.types";
import AlienTableRow from "./AlienTableRow";
import "../Styles/AlienTable.css";

interface AlienTableProps {
  aliens: Alien[];
}

const AlienTable: React.FC<AlienTableProps> = ({ aliens }) => {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="alien-table-container terminal-border">
      <div className="table-header">
        <div className="alien-icon">A</div>
        <span className="table-title">alien data</span>
      </div>

      <div className="table-content">
        <div className="table-head">
          <div className="head-cell first-name">first name</div>
          <div className="head-cell last-name">last name</div>
          <div className="head-cell id-number">id number</div>
          <div className="head-cell rank">rank</div>
          <div className="head-cell arrow"></div>
        </div>

        <div className="table-body">
          {aliens.map((alien) => (
            <AlienTableRow
              key={alien.id}
              alien={alien}
              onClick={() => handleRowClick(alien.id)}
            />
          ))}
        </div>
      </div>

      <p className="table-footer">alien data property of AI2345 INC.</p>
    </div>
  );
};

export default AlienTable;
