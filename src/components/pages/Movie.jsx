import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
    // [ , ] 두번째 칸이 함수라고 생각하면 됨  setMovies
    const [movies, setMovies] = useState([]);
    const [lists, setLists] = useState([]);

    //클릭할 때 가져오기 //자바스크립트에서 사용가능함 밑에는 리엑트
    const search = (query) => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=1fb50f08441e9552bb427c8e5f22096d&query=${query}`
        )
        .then((response) => response.json())
        .then((result) => setMovies(result.results))
        .catch((error) => console.log(error))
    };

    useEffect (() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1fb50f08441e9552bb427c8e5f22096d&language=en-US&page=1")
        .then((response) => response.json())
        // .then((result) => console.log(result.results))
        .then((result) => setLists(result.results))
        .catch((error) => console.log(error))
    }, []);


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=1fb50f08441e9552bb427c8e5f22096d&query=Disney&page=1")
        .then((response) => response.json())
        // 우리가 지은 result에 console에 나오는 results배열 불러오기
        // .then((result) => console.log(result.results))
        .then((result) => setMovies(result.results))
        // 에러잡기
        .catch((error) => console.log(error))
    }, []);
    return (
        <>
            <Header />
            <Title title={["Movie", "reference api"]} />
            <MovieList lists={lists}/>
            <MovieSearch onSearch={search}/>
            <MovieCont movies={movies}/>
            <Contact />
            <Contents />
            <Footer />
        </>
    );
};
export default Movie;