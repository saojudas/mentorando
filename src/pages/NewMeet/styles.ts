import styled from 'styled-components';

interface ColorProps {
  color: string;
}

export const Container = styled.div<ColorProps>`
  background: ${props => props.color};
  width: 100%;
  align-items: center;
  margin: 50px 0;
  justify-content: center;
  padding: 0 20%;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 2.5em;
  }
`;

export const Item = styled.div<ColorProps>`
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
