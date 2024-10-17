import React from "react";
import "./Card.scss";
import bIcon from "../../assets/b-icon.png";
import livenLogo from "../../assets/liven-logo.png";

const Card = ({ data, onCardClick }) => {
  const { price, bonus, isAppExclusive } = data;

  const renderLabelAndValue = (label, value, className = "") => (
    <div className={className}>
      <div className="label-sm">{label}</div>
      <h2 className="fw-bold price-tag">${value}</h2>
    </div>
  );

  return (
    <div
      role="presentation"
      onClick={onCardClick}
      className="card-wrapper d-flex justify-content-between align-items-center m-3 bg-white"
    >
      {isAppExclusive && (
        <div className="tag">
          <img src={livenLogo} alt="" className="liven-logo" />
          <span>App Exclusive</span>
        </div>
      )}
      <img src={bIcon} alt="icon" className="b-icon" />
      {renderLabelAndValue("Buy", price)}
      {renderLabelAndValue("Bonus", bonus, "text-green")}
    </div>
  );
};

export default Card;
