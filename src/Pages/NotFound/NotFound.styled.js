import styled from 'styled-components';

export const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;

  .linkToHome {
    font-size: 30px;
    font-weight: 700;
    color: green;
    text-decoration: underline;

    &:hover {
      color: red;
    }
  }
`;
