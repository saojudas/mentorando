import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  height: calc(100vh - 94px);
  display: flex;
  flex-direction: column;

  h1 {
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
    font-size: 36px;
    font-weight: normal;
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 0 0 50px 120px;
  padding: 0 60px;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 2.5em;
  }
`;

export const Item = styled.div`
  span {
    color: ${props => props.color};
    font-weight: bold;
    display: block;
    margin-top: 25px;
  }
`;

export const DateTimeInputsContainer = styled.div`
  display: grid;

  @media (max-width: 1100px) {
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
`;

export const ActionButons = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;

  button + button {
    margin-left: 32px;
  }
`;
