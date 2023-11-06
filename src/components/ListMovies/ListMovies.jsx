import React from 'react';
import FilmItem from 'components/FilmItem/FilmItem';

const ListMovies = ({ trendMovies }) => {
  return <FilmItem films={trendMovies} />;
};

export default ListMovies;
