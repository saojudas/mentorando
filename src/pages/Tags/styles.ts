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
  align-items: center;
  margin: 0 0 50px 0;
  justify-content: center;
  padding: 0 60px;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 2.5em;
  }
`;

export const TagsTitle = styled.div`
  margin: 8px 0 8px 100px;

  color: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TagsList = styled.div`
  margin-left: 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 24px;
  row-gap: 36px;
  justify-items: center;

  z-index: -1;

  a {
    text-decoration: none !important;
    color: inherit !important;
  }
`;
