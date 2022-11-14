import React from "react";

const MovieBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("comic");
  };
  const onClick2 = () => {
    onSearch("romance");
  };
  const onClick3 = () => {
    onSearch("action");
  };
  const onClick4 = () => {
    onSearch("mystery");
  };
  const onClick5 = () => {
    onSearch("thriller");
  };

  // e.target.innerHTML

  return (
    <div className="movie__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          comic
        </button>
        <button type="submit" onClick={onClick2}>
          romance
        </button>
        <button type="submit" onClick={onClick3}>
          action
        </button>
        <button type="submit" onClick={onClick4}>
          mystery
        </button>
        <button type="submit" onClick={onClick5}>
          thriller
        </button>
      </div>
    </div>
  );
};

export default MovieBtn;
