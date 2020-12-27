import styled from 'styled-components';

export const Container = styled.thead`
  tr th {
    text-align: left;

    strong {
      color: ${props => props.theme.colors.grayDark};
      text-align: left;
    }

    svg {
      margin-right: 8px;
      vertical-align: middle;
    }
  }
`;
