import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    alert(
      "\n\n              --- ĐỌC KĨ CÂU HỎI TRƯỚC KHI TRẢ LỜI!!! --- \n \n\n                                                   -.-"
    );
  }, []);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [clicked, setClicked] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);
  const [glowUp, setGlowUp] = useState(false);
  let glowTimeout = null;
  const move = () => {
    const buttonWidth = 110;
    const buttonHeight = 70;

    const centerX = window.innerWidth / 2 - buttonWidth / 2;
    const centerY = window.innerHeight / 2 - buttonHeight / 2;

    let randomX, randomY, newLeft, newTop;
    let distance = 0;

    do {
      randomX = Math.random();
      randomY = Math.random();
      newLeft =
        randomX <= 0.5
          ? Math.round(randomX * 2 * -centerX - 150)
          : Math.round(randomX * centerX - 150);
      newTop =
        randomY <= 0.5
          ? Math.round(randomY * 2 * -centerY - 50)
          : Math.round(randomY * centerY - 50);

      const dx = newLeft - position.left;
      const dy = newTop - position.top;

      distance = Math.sqrt(dx * dx + dy * dy);
    } while (distance < 222);
    setPosition({ left: newLeft, top: newTop });
  };
  const onYes = () => {
    setClicked(true);
  };
  const disappear = () => {
    setDeleteAll(true);
  };
  const handleMouseEnter = () => {
    // if (glowTimeout) clearTimeout(glowTimeout); // nếu đang có timer mờ thì hủy
    setGlowUp(true);
  };

  const handleMouseLeave = () => {
    glowTimeout = setTimeout(() => {
      setGlowUp(false);
    }, 500);
  };
  return (
    <div className="wrap">
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`video ${clicked ? "hide" : ""}`}
      >
        <source src="/video/falling snow.mp4" type="video/mp4" />
      </video>
      {/* <img src="/img/heart.png" alt="heart" /> */}

      <p className={`question ${clicked ? "hide" : ""}`}>
        Cậu có thương tớ honggg 🥺🥺💔💔
      </p>
      <img
        src="/img/fireworks.jpg"
        alt="fireworks"
        className={`img ${clicked ? "" : "hide"}`}
      />
      <div className={`show-love-text ${clicked ? "" : "hide"}`}>
        {/* <div className="wing">꧁𓇼꙳•̩̩͙❅*̩̩͙‧͙ </div> */}

        <div className={`love-content ${deleteAll ? "hide" : ""}`}>
          <div className="love-text">Tớ củm vậy 🥺🥺 </div>
          {/* <div
            className={`love-name ${glowUp ? "glowUp" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            𓆝 𓆟 Ngọc Trâm 𓆝 𓆟
          </div> */}
          <img
            src="/img/gaumeo.png"
            alt="gaumeo"
            className="gaumeo"
            onClick={disappear}
          />
        </div>
        {/* <div className="wing"> ‧͙*̩̩͙❆ ͙˚•̩̩͙⋆𓇼꧂</div> */}
      </div>
      <div className={`button-group ${clicked ? "hide" : ""}`}>
        <button className="click-button" onClick={onYes}>
          Cóa
        </button>
        <div
          className="wrap-movebutton"
          onMouseEnter={move}
          style={{
            left: position.left,
            top: position.top,
          }}
        >
          <div className="move-button">Hong</div>
        </div>
      </div>
    </div>
  );
}

export default App;
