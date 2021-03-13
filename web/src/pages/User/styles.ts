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

  h3 {
    margin-top: 40px;
    font-weight: 500;
    font-size: 2em;
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
  }
`;

export const UserPhoto = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;

  img {
    height: 200px;
    width: 200px;

    object-fit: contain;

    border-radius: 50%;
    margin-bottom: 9px;
  }
`;

export const Name = styled.div`
  margin-top: 32px;
  display: flex;
  text-align: center;
  justify-content: center;

  span {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5em;
    font-weight: bold;
  }

  svg {
    margin-left: 12px;
  }
`;

export const Description = styled.div`
  p {
    margin-top: 24px;
    font-size: 1.1em;
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
  }
`;

export const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  div {
    margin-bottom: 0 !important;
    height: 44px !important;
    border-radius: 50px !important;
  }
`;

export const Videos = styled.div`
  margin: 32px 0 60px 0px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 36px;

  a {
    text-decoration: none !important;
    color: inherit !important;
  }
`;
