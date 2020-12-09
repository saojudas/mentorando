import styled, { css } from 'styled-components';

export const Container = styled.div`
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Title = styled.div`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;

  color: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.black
      : props.theme.colors.white};

  margin: 8px 0;
  padding: 16px;

  position: relative;

  cursor: pointer;

  span {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ContentProps {
  isOpen: boolean;
}

export const Content = styled.div<ContentProps>`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  border-left: 1px solid ${props => props.theme.colors.primary};
  border-right: 1px solid ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};

  margin-top: ${props => (props.isOpen ? '0px' : '-8px')};
  padding: 16px;

  transition: all 400ms;

  display: flex;

  position: relative;

  &:before {
    content: '';

    border-left: 1px solid ${props => props.theme.colors.primary};

    width: 12px;
    height: 20px;

    margin-top: -12px;

    position: absolute;
    left: -1px;
    top: 0;
  }

  &:after {
    content: '';

    border-right: 1px solid ${props => props.theme.colors.primary};

    width: 12px;
    height: 20px;

    margin-top: -12px;

    position: absolute;
    right: -1px;
    top: 0;
  }

  ${props =>
    !props.isOpen &&
    css`
      height: 0;
      padding: 0;
    `}

  > div {
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};

    transition: all 800ms;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  div {
    padding: 16px 8px;

    strong {
      color: ${props => props.theme.colors.primary};
      font-size: 14px;
    }

    p {
      color: ${props =>
        props.theme.title === 'light'
          ? props.theme.colors.black
          : props.theme.colors.white};
    }
  }
`;
