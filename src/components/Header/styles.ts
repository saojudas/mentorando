import styled from 'styled-components';
import { lighten } from 'polished';

interface ColorProps {
  color: string;
}

export const Container = styled.header<ColorProps>`
  background: ${props => props.color};

  height: 80px;
  width: 100%;

  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  > div:nth-of-type(2) {
    position: relative;
    height: 100%;

    &:hover ul {
      top: 76px;
      opacity: 1;
      visibility: initial;
    }
  }
`;

export const Logo = styled.div`
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

export const NavigationBar = styled.nav<ColorProps>`
  ul {
    display: flex;

    li {
      margin: 0 15px;

      a {
        color: ${props => props.color};
        font-size: 18px;
        font-weight: bold;

        &:hover {
          color: ${props => props.theme.colors.secondary};
          border-bottom: 2px solid ${props => props.theme.colors.white};
        }
      }
    }
  }
`;

export const Profile = styled.div<ColorProps>`
  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(90%);
  }

  span {
    color: ${props => props.color};
    font-size: 1.3em;
    font-weight: bold;
    text-align: right;
    white-space: nowrap;

    min-width: 120px;

    cursor: pointer;
  }

  img {
    width: 45px;
    height: 45px;

    border: 1px solid ${props => props.color};
    border-radius: 50%;

    object-fit: contain;

    margin-left: 20px;
  }
`;

export const Actions = styled.ul`
  position: absolute;
  top: 88px;
  right: 0;

  margin-top: 4px;
  padding: 8px 0;

  width: 154px;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};

  border-radius: 4px;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.6);

  opacity: 0;

  visibility: hidden;

  transition: all 200ms;

  z-index: 1;

  li a,
  li button {
    font-size: 16px;
    color: ${props => props.theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    line-height: 48px;

    padding: 0 16px;
    border-radius: 4px;

    cursor: pointer;

    position: relative;

    &:hover {
      background: ${props => lighten(0.2, props.theme.colors.blue)};
    }

    svg {
      margin-right: 8px;
    }
  }
`;
