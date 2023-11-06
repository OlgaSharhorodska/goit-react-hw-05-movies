import axios from 'axios';
import { refs } from './refs';

const END_POINT = 'trending/movie/week';

const getFetch = async () => {
  const responce = await axios.get(`${refs.BASE_URL}${END_POINT}`, {
    params: {
      api_key: refs.API_KEY,
    },
  });

  return responce;
};
export default getFetch;
