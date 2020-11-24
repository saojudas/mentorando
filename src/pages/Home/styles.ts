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

  @media (max-height: 864px) {
    margin-bottom: 16px;
  }
`;

export const ContentSection = styled.section`
  width: 100%;
  height: 100%;
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

export const Videos = styled.div`
  margin: 0 0 60px 140px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 36px;
  justify-items: center;

  a {
    text-decoration: none !important;
    color: inherit !important;
  }
`;
