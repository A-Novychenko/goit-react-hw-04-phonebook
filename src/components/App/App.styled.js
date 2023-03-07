import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 72px;
  padding-left: 20px;
  padding-right: 20px;
  width: 400px;
  height: 800px;

  background-color: black;
  border: 1px solid black;
  border-radius: 48px;
`;

export const Wrap = styled.div`
  flex-grow: 1;

  padding: 8px;

  background-color: white;
`;

export const MainTitle = styled.h1`
  padding: 10px;

  font-size: 28px;
  text-align: center;
`;

export const Title = styled.h1`
  padding: 20px;

  font-size: 24px;
  text-align: center;
`;

export const StyleArround = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid grey;
  width: 56px;
  height: 56px;

  border-radius: 50%;
`;
