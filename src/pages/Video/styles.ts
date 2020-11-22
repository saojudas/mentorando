import styled, { css } from 'styled-components';
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
  margin-top: 32px;

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

interface ContentProps {
  isTheater?: boolean;
}

export const Content = styled.div<ContentProps>`
  width: 100%;

  ${props =>
    props.isTheater
      ? css`
          margin: 0 0 50px 120px;
        `
      : css`
          margin: 0 0 50px 0px;
        `}

  padding: 0 60px;

  h1 {
    font-weight: 600;
    font-size: 2.2em;
  }
`;

export const FrameVideo = styled.div`
  position: relative;

  iframe {
    border: 0px !important;
  }

  &:hover button {
    opacity: 1;
    visibility: visible;
  }

  button {
    position: absolute;
    right: 0;

    background-color: ${props => props.theme.colors.primary};

    padding: 8px 16px;

    color: ${props => props.theme.colors.white};
    font-weight: bold;

    opacity: 0;
    visibility: hidden;

    transition: opacity 500ms;
  }
`;

export const Description = styled.div`
  margin-top: 32px;

  h3 {
    font-size: 1.8em;
    color: ${props => props.theme.colors.grayDark};
  }
  p {
    font-size: 1.2em;

    margin-top: 16px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
`;
