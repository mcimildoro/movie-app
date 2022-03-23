import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFech";
import { URL_API, API } from "../utils/constants";
import SliderMovies from "./../components/SliderMovies";
import MovieList from "../components/MovieList/MovieList";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}movie/now_playing?api_key=${API}&language=en-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}movie/popular?api_key=${API}&language=en-ES&page=1`
  );


  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList tittle="Peliculas Populares" movies={popularMovies}/>
        </Col>
        <Col span={12}>
          <MovieList />
        </Col>
      </Row>
    </>
  );
}
