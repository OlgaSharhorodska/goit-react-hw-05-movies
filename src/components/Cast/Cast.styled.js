import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const PhotoWrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.4),
    0px 4px 4px rgba(46, 47, 66, 0.4), 0px 6px 6px rgba(46, 47, 66, 0.4);

  img {
    display: block;
  }
`;
export const ActorInfoWrap = styled.div`
  width: 150px;
`;
