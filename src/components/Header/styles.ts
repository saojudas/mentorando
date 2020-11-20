import styled from 'styled-components';

interface ColorProps {
  color: string;
}

export const Container = styled.header<ColorProps>`
  background: ${props => props.color};

  height: 80px;
  width: 100%;

  padding: 48px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
