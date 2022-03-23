import React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";

import "./SliderMovies.scss";

export default function SliderMovies(props) {
  const { movies } = props;
 
  if (movies.loading || !movies.result) {
    return <Loading />;
  }
  const { results } = movies.result;
  return (
    <Carousel autoplay className="sliders-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, tittle, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies_movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies_movie-info">
        <h2>{tittle}</h2>
        <div>
          {overview}
          <Link to={`/movie/${id}`}>
            <Button className="slider-movies_movie-info_button" type="primary">
              Ver mas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
