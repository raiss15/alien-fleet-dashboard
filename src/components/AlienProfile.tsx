import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alien } from "../types/alien.types";
import StatBar from "./StatBar";
import "../Styles/AlienProfile.css";

interface AlienProfileProps {
  alien: Alien;
}

const AlienProfile: React.FC<AlienProfileProps> = ({ alien }) => {
  const navigate = useNavigate();

  // Calculate max values based on alien type
  const getMaxStats = (type: string) => {
    switch (type) {
      case "Boss":
        return { maxAtk: 3, maxHp: 3, maxSpd: 3 };
      case "Elite":
        return { maxAtk: 3, maxHp: 3, maxSpd: 3 };
      default:
        return { maxAtk: 3, maxHp: 3, maxSpd: 3 };
    }
  };

  const { maxAtk, maxHp, maxSpd } = getMaxStats(alien.type);

  return (
    <div className="profile-container terminal-border">
      <div className="profile-header">
        <div className="header-left">
          <button className="back-button" onClick={() => navigate("/")}>
            <span>{"<"}</span> back
          </button>
          <span className="profile-breadcrumb">alien data / profile</span>
        </div>
        <div className="header-icon">A</div>
      </div>

      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-image">
            {alien.url ? (
              <img
                src={alien.url}
                alt={`${alien.firstName} ${alien.lastName}`}
                className="alien-avatar"
              />
            ) : (
              <div className="checkered-pattern"></div>
            )}
          </div>
          <div className="profile-footer">
            alien data property of ALIENS INC.
          </div>
        </div>

        <div className="profile-right">
          <div className="alien-info">
            <h2 className="alien-name">
              {alien.firstName} {alien.lastName}
            </h2>
            <div className="alien-badges">
              <span className="badge">rank of alien</span>
              <span className="badge">#{alien.id}</span>
            </div>
          </div>

          <div className="stats-section">
            <h3 className="stats-title">alien stats</h3>

            <div className="stats-content">
              <StatBar
                label="ATK"
                value={alien.stats.atk}
                maxValue={maxAtk}
                description="attack strength"
              />

              <StatBar
                label="HP"
                value={alien.stats.hp}
                maxValue={maxHp}
                description="health points"
              />

              <StatBar
                label="SPD"
                value={alien.stats.spd}
                maxValue={maxSpd}
                description="speed and agility"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlienProfile;
