import styled from 'styled-components';

interface ColorProps {
  color: string;
}

export const Container = styled.div`
  width: 180px;
  height: 180px;
  position: relative;

  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.primaryLight} !important;
  box-shadow: inset 0 0 1em transparent,
    0 0 0.3em ${props => props.theme.colors.primary};

  svg {
    position: absolute;
    right: 6px;
    top: 6px;
  }
`;

export const CardBody = styled.div`
  min-height: 139px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  img {
    height: 76px;
    width: 76px;
    object-fit: contain;
    border-radius: 50%;
    margin-bottom: 9px;
  }
`;

export const TagArea = styled.div<ColorProps>`
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.secondary};
  width: fit-content;
  padding: 0 10px;

  span {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const CardInfo = styled.div<ColorProps>`
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 38px;
  border-radius: 0 0 7px 7px;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-top: 2px solid ${props => props.theme.colors.primaryLight};
`;
