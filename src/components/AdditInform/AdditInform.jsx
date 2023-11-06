import React from 'react';
import { AddInfoList } from '../../Pages/MovieDetails/MoveDetails.styled';
import { AdditInformWrap } from './AdditInform.styled';
import { Link } from 'react-router-dom';

const AdditInform = () => {
  return (
    <AdditInformWrap>
      <h3>Additional information</h3>
      <AddInfoList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AddInfoList>
    </AdditInformWrap>
  );
};

export default AdditInform;
