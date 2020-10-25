import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colors.primaryLighter};
  padding: 8px 16px;
  width: 100%;
  color: ${(props) => props.theme.colors.grayLight};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 32px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${(props) => props.theme.colors.black};

    &::placeholder {
      color: ${(props) => props.theme.colors.grayLight};
    }
  }

  svg {
    margin-left: 8px;
  }
`;
