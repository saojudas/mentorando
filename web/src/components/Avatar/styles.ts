import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  div {
    position: relative;
  }

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 42px;
    height: 42px;
    background: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.orange
        : props.theme.colors.primary};
    border-radius: 50%;
    right: 8px;
    bottom: 8px;

    cursor: pointer;

    transition: background-color 200ms;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: ${props =>
        props.theme.title === 'light'
          ? shade(0.2, props.theme.colors.orange)
          : shade(0.2, props.theme.colors.primary)};
    }
  }

  /*

  a {
    position: relative;
  }

  img {
    height: 200px;
    width: 200px;

    object-fit: contain;

    border-radius: 50%;
    margin-bottom: 9px;
  }

  svg {
    position: absolute;
    right: 10px;
    bottom: 10px;
  } */
`;
