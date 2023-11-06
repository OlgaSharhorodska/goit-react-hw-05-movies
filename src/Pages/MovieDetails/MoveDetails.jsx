import React, { Suspense, useRef, useState } from 'react';
import {
  BackLink,
  FilmPageWrap,
  Genres,
  ImgWrap,
  InfoWrap,
} from './MoveDetails.styled';
import { refs } from 'js/refs';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getFilmInfo from 'js/apiFilm';
import { useEffect } from 'react';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import defaultPhoto from '../../img/bart.jpg';
import { Loader } from 'components/Loader/loader';
import AdditInform from '../../components/AdditInform/AdditInform';
import ErrMessage from 'components/ErrMessage/ErrMessage';

const MoveDetails = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const moveId = useParams();
  const id = moveId.moviesId;
  const [film, setFilm] = useState(moveId);

  const { poster_path, title, vote_average, overview, genres = [] } = film;

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/');

  // не можу зрозуміти чому в такому варіанті який пропонується не хоче працювати!!!

  //   const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // показує underfind і викидає на головну сторінку

  // console.log(backLinkLocationRef);

  useEffect(() => {
    const getFilm = async () => {
      try {
        setLoader(true);
        setError(false);
        const { data } = await getFilmInfo(id);
        setFilm(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getFilm(id);
  }, [id]);

  const urlPoster = refs.POSTER_URL + poster_path;

  return (
    <main>
      <Section>
        {loader && <Loader />}
        {error && <ErrMessage />}
        {poster_path && (
          <Container>
            <FilmPageWrap>
              <Link to={backLinkLocationRef.current}>
                <BackLink>Go Back</BackLink>
              </Link>
              <InfoWrap>
                <ImgWrap>
                  <img
                    src={poster_path ? urlPoster : defaultPhoto}
                    alt="films poster"
                    width={300}
                  />
                </ImgWrap>
                <div>
                  <h1>{title}</h1>
                  <div>
                    <h2>User Score:</h2>
                    <p> {Math.ceil(vote_average * 10)}%</p>
                  </div>
                  <div>
                    <h2>Overview:</h2>
                    <p> {overview}</p>
                  </div>
                  <div>
                    <h2>Genres:</h2>
                    <Genres>
                      {genres.map(({ name, id }) => (
                        <span key={id}>{name}</span>
                      ))}
                    </Genres>
                  </div>
                </div>
              </InfoWrap>
            </FilmPageWrap>
            <AdditInform />
            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        )}
      </Section>
    </main>
  );
};

export default MoveDetails;
