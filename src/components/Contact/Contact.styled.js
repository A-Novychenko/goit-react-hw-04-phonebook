import styled from 'styled-components';

export const Name = styled.p`
  font-weight: 500;
`;

export const Inner = styled.div`
  display: flex;
  gap: 8px;
`;

export const Remove = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: red;
    color: white;
  }
`;
