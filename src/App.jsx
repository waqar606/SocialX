import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import { data, data2 } from "./Data";
function App() {
  const [color, setcolor] = useState("white");
  const [bgColor, setbgColor] = useState("#232D3f");
  const [toggle, settoggle] = useState(false);
  const toggleButton = () => {
    //Change State b/t true and false if true then false if false then make it true
    settoggle(!toggle);
    if (toggle) {
      setbgColor("rgb(255,255,255)");
      setcolor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setbgColor("#232D3f");
      setcolor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };
  return (
    <>
      <Navbar
        toggleButton={toggleButton}
        toggle={toggle}
        bgColor={bgColor}
        color={color}
      />
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} />
        </div>
        <div className="post_section">
          {data.map((d) => (
            <Post key={d.id} data={d} />
          ))}
        </div>
        <div className="right_bar">
          {data2.map((d) => (
            <Rightbar key={d.id} data={d} bgColor={bgColor} color={color} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
