import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;

  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 8px;
  box-shadow: inset 0 0 1em transparent,
    0 0 0.4em ${props => props.theme.colors.primary};
`;

export const Thumbnail = styled.div`
  height: 160px;

  cursor: pointer;

  img {
    height: 100%;

    object-fit: cover;

    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
`;

export const CardInfo = styled.div`
  min-height: 41px;
  max-height: 58px;

  padding: 4px;

  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.primaryLighter
      : props.theme.colors.white};

  border-top: 1px solid ${props => props.theme.colors.primaryLight};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 1rem;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      text-overflow: ellipsis;
      overflow: hidden;
      width: 220px;
    }
  }

  > svg {
    /* margin-top: 4px; */

    cursor: pointer;
  }
`;
