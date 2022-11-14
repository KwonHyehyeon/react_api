import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

// 밑에 부분을 뿌려주기
function MoviePopular(props) {
  return (
    <li className="Movielist">
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <span className="rank">{props.rank + 1}</span>
        <img
          className="MovieImg"
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <em>
          <span className="Movietitle">{props.movie.title}</span>
          <span className="Moviestar">{props.movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
}

const MovieList = (props) => {
  // console.log({movies})
  SwiperCore.use([Autoplay]);
  const [setSwiperRef] = useState(null);
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <h2>Top 20 Movies</h2>
          <ul>
            <div className="swiper mySwiper">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                initialSlide={5}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {props.lists.map((movies, index) =>
                  index < 20 ? (
                    <SwiperSlide>
                      <MoviePopular key={index} rank={index} movie={movies} />
                    </SwiperSlide>
                  ) : null
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
