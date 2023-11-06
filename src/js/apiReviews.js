import axios from 'axios';
import { refs } from './refs';

const END_POINT = `movie/`;

const getFilmReviews = async id => {
  const responce = await axios.get(
    `${refs.BASE_URL}${END_POINT}${id}/reviews`,
    {
      params: { api_key: refs.API_KEY },
    }
  );

  return responce;
};
export default getFilmReviews;
