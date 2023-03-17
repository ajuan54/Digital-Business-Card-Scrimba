import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img
        src={require("../img/laurasmith.png")}
        alt="woman background orange"
        className="laura"
      />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>
        {" "}
        <a className="website" href="none" target="_blank">
          laurasmith.website
        </a>
      </p>
      <button>
        <img
          src={require("../img/Icon.png")}
          alt="mail"
          width="13px"
          className="mailIcon"
        />
        Email
      </button>
    </div>
  );
}
