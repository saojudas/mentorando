import styled from 'styled-components';

interface ColorProps {
  color: string;
}

export const Container = styled.header<ColorProps>`
  background: ${props => props.color};
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;
`;

export const Logo = styled.div``;

export const NavigationBar = styled.nav<ColorProps>`
  ul {
    display: flex;
    li {
      margin: 0 15px;
      a {
        font-weight: bold;
        color: ${props => props.color};
      }
    }
  }
`;

export const Profile = styled.div<ColorProps>`
  display: flex;
  align-items: center;

  span {
    font-size: 1.3em;
    font-weight: bold;
    color: ${props => props.color};
    cursor: pointer;
    min-width: 120px;
    text-align: right;
    white-space: nowrap;
  }
  img {
    width: 45px;
    height: 45px;
    object-fit: contain;
    border-radius: 50%;
    margin-left: 20px;
    border: 1px solid ${props => props.color};
  }
`;
