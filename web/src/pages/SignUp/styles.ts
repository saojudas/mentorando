import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Presentation = styled.div`
  background: ${props => props.theme.colors.primary};
  height: 100vh;
  width: 100%;

  position: relative;

  a img {
    position: absolute;
    top: 80px;
    left: 100px;

    width: 400px;

    z-index: 10;
  }

  p {
    position: absolute;
    top: 280px;
    left: 100px;

    max-width: 700px;

    color: ${props => props.theme.colors.white};
    font-size: 24px;
    font-weight: normal;

    z-index: 10;
  }

  > img {
    width: 100%;

    position: absolute;
    bottom: 0;
  }
`;

export const NewAccountContainer = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  width: 540px;

  padding: 40px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    margin-top: 20px;
  }

  h1 {
    color: ${props => props.theme.colors.blue};
    font-weight: normal;
    font-size: 48px;
  }

  p {
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
  }

  > span:nth-of-type(1) {
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
    font-weight: normal;
    font-size: 16px;
    margin-top: 32px;
  }

  > span:nth-of-type(2) {
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};

    margin: 50px 0;
  }

  > div:nth-of-type(8) {
    margin-top: 0px;
  }
`;

export const UserTypeContainer = styled.section`
  margin: 16px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;

    cursor: pointer;

    transition: color 0.4s;

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }
`;

export const ActionButons = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
`;
