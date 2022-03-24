import React from "react";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";

import "./MovieList.scss";

export default function MovieList(props) {
  const { tittle, movies } = props;

  if (!movies?.result?.results) return null;

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{tittle}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    ></List>
  );
}

function RenderMovie(props) {
  const { movie } = props;
  return <List.Item className="movie-list__movie"></List.Item>;
}
