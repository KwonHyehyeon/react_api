import React, { useRef } from "react";

// const MovieSearch = ({onSearch}) 매개변수니깐 {onSearch} 로 Movie.jsx의 <MovieCont ->로 전달되는 것
const YoutubeSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    //  엔터 친 사용자 데이터 가져오기
    //  useRef기능을 가져와야함 (inputRef때문에) -> 클릭하거나 바꼈을 때 시행되어야 하므로
    const value = inputRef.current.value;
    // onSearch한테 value값 넘겨주기
    onSearch(value);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="movie__search">
      <div className="container">
        <h2>검색하기</h2>
        {/* 데이터 바뀔 땐 ref , onKeyPress눌렀을 때는 함수 실행*/}
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </div>
  );
};

export default YoutubeSearch;
