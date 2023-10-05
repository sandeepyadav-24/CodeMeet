import React, { useState } from "react";
import Client from "../Components/Client.js";
import Editor from "../Components/editor.js";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "piyush S" },
    { socketId: 3, username: "ayush A" },
    { socketId: 4, username: "Harsh P" },
    { socketId: 5, username: "Shubhang P" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo"></div>
          <h3>Connected</h3>
          <div className="clientList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default editorPage;
