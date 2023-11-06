import axios from 'axios';
import { refs } from './refs';

const END_POINT = `movie/`;

const getFilmInfo = async id => {
  const responce = await axios.get(`${refs.BASE_URL}${END_POINT}${id}`, {
    params: { api_key: refs.API_KEY },
  });

  return responce;
};
export default getFilmInfo;
