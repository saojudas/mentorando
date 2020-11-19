import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;

  background: ${props => props.theme.colors.primary};

  display: grid;
  grid-template-areas:
    'logo hero'
    'resume hero'
    'actions total';

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  img {
    grid-area: logo;
    width: 70%;
  }

  p {
    grid-area: resume;

    color: ${props => props.theme.colors.textInPrimary};
    font-size: 36px;
    font-weight: normal;

    margin-top: 200px;
    max-width: 620px;
  }
`;

export const ActionButtons = styled.div`
  grid-area: actions;

  margin-top: 80px;

  display: flex;

  div + div {
    margin-left: 52px;
  }
`;

export const Hero = styled.div`
  grid-area: hero;

  svg {
    margin-top: 60px;
  }
`;

export const TotalConnections = styled.div`
  grid-area: total;

  align-self: flex-end;

  text-align: right;

  color: ${props => props.theme.colors.white};
  font-size: 24px;
`;
