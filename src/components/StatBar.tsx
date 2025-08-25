import React from "react";

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  description: string;
}

const StatBar: React.FC<StatBarProps> = ({
  label,
  value,
  maxValue,
  description,
}) => {
  return (
    <div className="stat-bar-container">
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        <span className="stat-description">{description}</span>
      </div>

      <div className="stat-values">
        <span className="stat-value">
          {label} = {value}
        </span>
        <div className="stat-bar">
          {Array.from({ length: maxValue }).map((_, index) => (
            <div
              key={index}
              className={`stat-rectangle ${index < value ? "filled" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatBar;
