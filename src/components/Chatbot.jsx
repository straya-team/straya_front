import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Chatbot() {
  return (
    <div className="wrapper">
      <div className="title">Chat Box</div>
      <div className="box">
        <div className="item">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="msg">
            <p>Hello everyone, How are you?</p>
          </div>
        </div>
        <br clear="both" />
        <div className="item right">
          <div className="msg">
            <p>Nice</p>
          </div>
        </div>
      </div>

      <div className="typing-area">
        <div className="input-field">
          <input type="text" placeholder="Type your message" required />
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;