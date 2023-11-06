import getFilmReviews from 'js/apiReviews';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultPhoto from '../../img/bart.jpg';
import { ReviewsList } from './Reviews.styled';
import { Loader } from 'components/Loader/loader';
import ErrMessage from 'components/ErrMessage/ErrMessage';

const Reviews = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState();

  const moviesId = useParams();
  const id = moviesId.moviesId;

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoader(true);
        setError(false);
        const {
          data: { results },
        } = await getFilmReviews(id);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getReviews(id);
  }, [id]);

  // console.log(reviews);

  return (
    <ReviewsList>
      {loader && <Loader />}
      {error && <ErrMessage />}
      {reviews &&
        reviews.map(
          ({
            id,
            author,
            content,
            created_at,
            author_details: { avatar_path },
          }) => {
            return (
              <li key={id}>
                <div>
                  <img
                    src={
                      avatar_path
                        ? 'https://image.tmdb.org/t/p/w500' + avatar_path
                        : defaultPhoto
                    }
                    alt="author avatar"
                  ></img>
                </div>
                <div>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                  <p>Time: {created_at}</p>
                </div>
              </li>
            );
          }
        )}
      {reviews && reviews.length === 0 && <li>There is no comment.</li>}
    </ReviewsList>
  );
};

export default Reviews;
