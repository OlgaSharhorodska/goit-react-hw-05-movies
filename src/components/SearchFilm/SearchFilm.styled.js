import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
`;

export const SearchButton = styled.button`
  font-size: 13px;
  font-weight: 600;
  padding: 6px 10px 4px 10px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
    background-color: rgb(204, 203, 203);
  }

  &:active {
    background-color: rgb(179, 179, 179);
  }
`;
