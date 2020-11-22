import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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

  p {
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
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

  margin-bottom: 60px;

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

  margin: 20px 0 50px 0;
  padding: 0 60px;

  position: relative;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 2.5em;

    margin-bottom: 48px;
  }

  p {
    width: 64%;
    font-size: 24px;

    &:nth-of-type(1) {
      position: absolute;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 560px;
      right: 60px;

      text-align: right;

      width: 66% !important;
    }

    &:nth-of-type(3) {
      position: absolute;
      top: 1120px;

      width: 66% !important;
    }
  }

  img:nth-of-type(1) {
    position: absolute;
    top: 210px;
    right: 60px;
  }

  img:nth-of-type(2) {
    position: absolute;
    top: 790px;
  }

  button {
    position: absolute;
    top: 1440px;

    width: 350px;
  }

  div {
    position: absolute;
    top: 1440px;
    left: 480px;

    width: 350px;
  }
`;
