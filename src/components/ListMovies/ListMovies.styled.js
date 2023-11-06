import styled from 'styled-components';

export const ListNameMovies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;

  li {
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    width: 200px;
    margin-bottom: 10px;
    font-weight: 600;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.4),
      0px 4px 4px rgba(46, 47, 66, 0.4), 0px 6px 6px rgba(46, 47, 66, 0.4);
    justify-content: center;
  }

  img {
    border-radius: 10px;
    margin-bottom: 5px;
    display: block;
  }
`;
export const TitleFilm = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
`;
