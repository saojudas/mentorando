import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Presentation = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 100vh;
  width: 100%;

  position: relative;

  h1 {
    position: absolute;
    top: 80px;
    left: 100px;

    color: ${(props) => props.theme.colors.white};
    font-size: 42px;
    font-weight: normal;
    letter-spacing: 4px;

    z-index: 10;
  }

  p {
    position: absolute;
    top: 240px;
    left: 100px;

    max-width: 700px;

    color: ${(props) => props.theme.colors.white};
    font-size: 24px;
    font-weight: normal;

    z-index: 10;
  }

  img {
    width: 100%;

    position: absolute;
    bottom: 0;
  }
`;

export const AccessContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  width: 700px;

  padding: 60px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.colors.blue};
    font-weight: normal;
    font-size: 48px;
  }

  > span:nth-of-type(1) {
    color: ${(props) => props.theme.colors.black};
    font-weight: normal;
    font-size: 16px;
    margin-top: 32px;

  }

  > span:nth-of-type(2) {
    margin: 50px 0;
  }
`;

export const ActionButons = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
`;

export const RememberMeContainer = styled.section`
  margin: 16px 0 40px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
`;
