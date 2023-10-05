import React, { useState } from "react";

import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    console.log(id);
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQElYfsIwxewtw/profile-displayphoto-shrink_400_400/0/1664866454170?e=1701907200&v=beta&t=loyLNFHchhk6TfZjAL5wue7j0LFs_pbAqzosXsJo_Pg"
          alt="personImg"
          width="50px"
          height="50px"
        ></img>
        <h4 className="mainLabel">Paste Invitation Room ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            placeholder="ROOM ID"
            className="inputBox"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="inputBox"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <button className="btn joinBtn">Join</button>
          <span classNme="createInfo">
            If you don't have an invite then create  
            <a href="" onClick={createNewRoom} className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        made with 🖤 &nbsp; by &nbsp;
        <a href="https://github.com/sandeepyadav-24?tab=repositories">
          Bit-n-Byte
        </a>
      </footer>
    </div>
  );
};
export default Home;
