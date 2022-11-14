import React from "react";

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("red");
  };
  const onClick2 = () => {
    onSearch("orange");
  };
  const onClick3 = () => {
    onSearch("yellow");
  };
  const onClick4 = () => {
    onSearch("green");
  };
  const onClick5 = () => {
    onSearch("blue");
  };
  const onClick6 = () => {
    onSearch("purple");
  };
  const onClick7 = () => {
    onSearch("pink");
  };
  const onClick8 = () => {
    onSearch("space");
  };
  const onClick9 = () => {
    onSearch("sky");
  };
  const onClick10 = () => {
    onSearch("natural");
  };

  // e.target.innerHTML

  return (
    <div className="unsplash__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          red
        </button>
        <button type="submit" onClick={onClick2}>
          orange
        </button>
        <button type="submit" onClick={onClick3}>
          yellow
        </button>
        <button type="submit" onClick={onClick4}>
          green
        </button>
        <button type="submit" onClick={onClick5}>
          blue
        </button>
        <button type="submit" onClick={onClick6}>
          purple
        </button>
        <button type="submit" onClick={onClick7}>
          pink
        </button>
        <button type="submit" onClick={onClick8}>
          space
        </button>
        <button type="submit" onClick={onClick9}>
          sky
        </button>
        <button type="submit" onClick={onClick10}>
          natural
        </button>
      </div>
    </div>
  );
};

export default UnsplashBtn;
