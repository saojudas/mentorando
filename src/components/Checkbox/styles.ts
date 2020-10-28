import styled from 'styled-components';

export const Container = styled.label`
  display: block;
  position: relative;

  padding-left: 24px;
  font-size: 16px;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    cursor: pointer;
  }

  span {
    position: absolute;
    top: 4px;
    left: 0;
    height: 18px;
    width: 18px;

    border-radius: 6px;
    background-color: #eee;
    border: 1px solid ${props => props.theme.colors.primary};
  }

  &:hover input ~ span {
    background-color: ${props => props.theme.colors.primaryLighter};
    border: 1px solid ${props => props.theme.colors.primary};
  }

  & input:checked ~ span {
    background-color: ${props => props.theme.colors.primary};
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    top: 2px;
    left: 5px;

    width: 3px;
    height: 7px;

    border: solid white;
    border-width: 0 3px 3px 0;

    transform: rotate(45deg);

    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }
`;
