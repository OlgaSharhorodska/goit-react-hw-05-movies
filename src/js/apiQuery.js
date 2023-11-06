import axios from 'axios';
import { refs } from './refs';

const END_POINT = `search/movie`;

const getFilmQuery = async query => {
  const responce = await axios.get(`${refs.BASE_URL}${END_POINT}`, {
    params: { api_key: refs.API_KEY, query: query },
  });

  return responce;
};
export default getFilmQuery;
