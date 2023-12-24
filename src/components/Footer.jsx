import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>In stock</p>
      <p>
        High quality assortments for the holidays <br />
        Made in Atlanta
      </p>
      <p>Rove {year}</p>
    </div>
  );
};

export default Footer;
