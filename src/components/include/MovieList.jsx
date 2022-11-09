import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Pagination, Navigation } from "swiper";


// 밑에 부분을 뿌려주기
function MoviePopular(props){
    return (
        <li className="Movielist">
            <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
                <span className='rank'>{props.rank + 1}</span>
                <img className='MovieImg' src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} 
                alt={props.movie.title} 
                />
                <em>
                    <span className="title">{props.movie.title}</span>
                    <span className="Moviestar">{props.movie.vote_average}</span>
                </em>
            </a>
        </li>
    );
}


const MovieList = (props) => {
    // console.log({movies})
    const [setSwiperRef] = useState(null);
  return (
    <section className='cont__movie'>
        <div className="container">
            <div className="movie__inner">
                <h2>Top 10 Movies</h2>
                <ul>
                    <div className="swiper mySwiper">
                    <Swiper
                      onSwiper={setSwiperRef}
                      slidesPerView={3}
                      centeredSlides={true}
                      spaceBetween={30}
                      pagination={{
                        type: "fraction",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                        {props.lists.map((movies, index) => 
                        index < 10 ? (
                    <SwiperSlide>
                        <MoviePopular key={index} rank={index} movie={movies} /> 
                    </SwiperSlide>
                        ) :  null
                    )}
                    </Swiper>                  
                    </div>
                </ul>
            </div>
        </div>
    </section>
    );
};
export default MovieList;