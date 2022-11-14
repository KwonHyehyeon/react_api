import React from "react";

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("cafeplaylist");
  };
  const onClick2 = () => {
    onSearch("studyplaylist");
  };
  const onClick3 = () => {
    onSearch("danceplaylist");
  };
  const onClick4 = () => {
    onSearch("kpopplaylist");
  };
  const onClick5 = () => {
    onSearch("billboardplaylist");
  };

  return (
    <div className="youtube__btn">
      <div className="container">
        {/* <input
          ref={inputRef}
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        /> */}
        <button type="submit" onClick={onClick1}>
          cafe
        </button>
        <button type="submit" onClick={onClick2}>
          study
        </button>
        <button type="submit" onClick={onClick3}>
          dance
        </button>
        <button type="submit" onClick={onClick4}>
          kpop
        </button>
        <button type="submit" onClick={onClick5}>
          billboard
        </button>
      </div>
    </div>
  );
};

export default UnsplashBtn;
