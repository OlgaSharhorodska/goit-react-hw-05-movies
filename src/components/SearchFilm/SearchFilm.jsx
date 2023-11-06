import {
  Formik,
  Form,
  // , ErrorMessage
} from 'formik';
import { Input, SearchButton } from './SearchFilm.styled';
// import { object, string } from 'yup';
import getFilmQuery from 'js/apiQuery';
import {
  //  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmItem from 'components/FilmItem/FilmItem';
import { Loader } from 'components/Loader/loader';
import ErrMessage from 'components/ErrMessage/ErrMessage';

// const userSchema = object({
//   film: string().min(5).required().lowercase().trim(),
// });

const SearchFilm = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState();
  const [params, setParams] = useSearchParams();

  // const location = useLocation();

  const initialValue = {
    film: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    setParams(values);
    resetForm();
  };

  useEffect(() => {
    const filmQuery = params.get('film');

    const getMoveQuery = async () => {
      try {
        setLoader(true);
        setError(false);
        const {
          data: { results },
        } = await getFilmQuery(filmQuery);
        setFilms(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getMoveQuery(filmQuery);
  }, [params]);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrMessage />}
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        // validationSchema={userSchema}
      >
        <Form autoComplete="off">
          <SearchButton type="submit">Search</SearchButton>
          <Input type="text" name="film" placeholder="Enter film..." />
          {/* <ErrorMessage name="film" component="div" /> */}
        </Form>
      </Formik>
      {films && <FilmItem films={films} />}
    </div>
  );
};

export default SearchFilm;