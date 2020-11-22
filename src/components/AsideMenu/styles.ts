import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 8px;
  box-shadow: inset 0 0 1em transparent,
    0 0 0.4em ${props => props.theme.colors.primary};

  padding: 36px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: fixed;

  z-index: 80;

  @media (max-height: 864px) {
    padding: 20px;
  }
`;

export const Item = styled.div`
  position: relative;

  width: 58px;
  height: 58px;

  & + div {
    margin-top: 36px;
  }

  @media (max-height: 864px) {
    margin-top: 8px !important;
    left: 4px;
  }

  &:hover div {
    border-radius: 38px 24px 48px 38px;
    width: 186px;

    box-shadow: inset 0 0 1em transparent,
      0 0 0.4em ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Animation = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 30px;

  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 14px;

  cursor: pointer;

  position: absolute;

  left: 0;

  transition: width 200ms;

  z-index: 2;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  &:hover svg,
  &:hover img {
    animation: rotate 0.8s ease-in-out;
    animation-timing-function: cubic-bezier(1, 0, 0.5, 1);
  }

  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  img {
    width: 32px;
    height: 32px;
  }

  span {
    position: absolute;
    left: 64px;

    max-width: 100px;

    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.white
        : props.theme.colors.black};
    font-size: 16px;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    opacity: 0;
    visibility: hidden;

    transition: opacity 1s;
  }

  @media (max-height: 864px) {
    width: 50px;
    height: 50px;
    padding-left: 9px;
  }
`;
