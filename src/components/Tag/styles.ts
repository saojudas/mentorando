import styled from 'styled-components';

export const Container = styled.div`
  height: 38px;

  text-align: center;

  margin-right: 20px;
  margin-bottom: 15px;

  border-radius: 7px;
  border-top: 1px solid ${props => props.theme.colors.primaryLight};
  background-color: ${props => props.theme.colors.primaryLighter};

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    padding: 0 15px;
    white-space: nowrap;
  }
`;
