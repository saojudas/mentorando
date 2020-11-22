import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  justify-items: center;

  a {
    text-decoration: none !important;
    color: inherit !important;
  }
`;
