import styled from 'styled-components';

export const Genres = styled.div`
  display: flex;
  gap: 10px;
`;
export const FilmPageWrap = styled.div`
  display: block;

  button {
    margin-bottom: 20px;
  }
`;

export const ImgWrap = styled.div`
  width: 400px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;

  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.4),
    0px 4px 4px rgba(46, 47, 66, 0.4), 0px 6px 6px rgba(46, 47, 66, 0.4);

  img {
    min-width: 100%;
    border-radius: 10px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-size: 20px;
  padding: 10px;
`;

export const BackLink = styled.p`
  display: block;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 20px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 40px;
  width: max-content;

  &:hover {
    cursor: pointer;
    background-color: rgb(204, 203, 203);
  }

  &:active {
    background-color: rgb(179, 179, 179);
  }
`;
