import axios from 'axios';
import { refs } from './refs';

const END_POINT = `movie/`;

const getFilmCast = async id => {
  const responce = await axios.get(
    `${refs.BASE_URL}${END_POINT}${id}/credits`,
    {
      params: { api_key: refs.API_KEY },
    }
  );

  return responce;
};
export default getFilmCast;
