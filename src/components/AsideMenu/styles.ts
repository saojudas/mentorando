import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 8px;
  box-shadow: inset 0 0 1em transparent,
    0 0 0.4em ${props => props.theme.colors.primary};

  width: 110px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Item = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;

  width: 58px;
  height: 58px;

  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 36px;
  }
`;
