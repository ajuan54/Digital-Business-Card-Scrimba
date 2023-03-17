import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <img
        src={require("../img/Twitter Icon.png")}
        alt="Twitter"
        className="icon"
      />
      <img
        src={require("../img/Facebook Icon.png")}
        alt="Facebook"
        className="icon"
      />
      <img
        src={require("../img/Instagram Icon.png")}
        alt="Instagram"
        className="icon"
      />
      <img
        src={require("../img/Linkedin Icon.png")}
        alt="Linkedin"
        className="icon"
      />
      <img
        src={require("../img/GitHub Icon.png")}
        alt="GitHub"
        className="icon"
      />
    </div>
  );
}
