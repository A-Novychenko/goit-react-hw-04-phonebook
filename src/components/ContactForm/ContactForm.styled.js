import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
  padding: 8px;
  font-size: 16px;
`;

export const Input = styled(Field)`
  width: 320px;
  padding: 4px;

  font-size: 16px;
  outline: none;

  border: 1px solid blue;
  border-radius: 4px;
`;

export const Add = styled.button`
  margin-top: 10px;
  padding: 4px;

  background-color: transparent;
  border: 1px solid blue;
  border-radius: 4px;
  color: blue;
  cursor: pointer;

  :hover {
    background-color: blue;
    color: white;
  }
`;
export const ErrorName = styled.div`
  position: absolute;
  bottom: -10px;

  color: red;
`;
export const ErrorTel = styled.div`
  position: absolute;
  bottom: -28px;

  color: red;
`;
