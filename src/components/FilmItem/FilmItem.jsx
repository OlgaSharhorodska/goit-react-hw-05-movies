import {
  ListNameMovies,
  TitleFilm,
} from 'components/ListMovies/ListMovies.styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultPhoto from '../../img/bart.jpg';

const FilmItem = ({ films }) => {
  const styleLink = {
    textDecoration: 'none',
    color: 'black',
  };

  const location = useLocation();
  // console.log(location);

  return (
    <ListNameMovies>
      {films.map(({ id, title, poster_path }) => {
        return (
          <li key={id}>
            <Link style={styleLink} to={`/movies/${id}`} state={location}>
              <div>
                <img
                  src={
                    poster_path
                      ? ['https://image.tmdb.org/t/p/w500' + poster_path]
                      : defaultPhoto
                  }
                  alt="poster"
                  width={200}
                />
              </div>

              <TitleFilm> {title}</TitleFilm>
            </Link>
          </li>
        );
      })}
    </ListNameMovies>
  );
};

export default FilmItem;
