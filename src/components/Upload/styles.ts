import { shade } from 'polished';
import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
  hasFile: boolean;
}

export const DropContainer = styled.div<DropContainerProps>`
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 4px;

  cursor: pointer;

  padding: ${props => props.hasFile && '40px'};

  ${props =>
    props.hasFile &&
    css`
      margin-bottom: 80px;
    `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: height 200ms ease;

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}

  img {
    width: 100%;
  }
`;

export const Preview = styled.div`
  width: 100%;

  position: relative;

  button {
    position: absolute;
    bottom: -100px;

    width: 100%;
    height: 36px;
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 200ms;

    &:hover {
      background: ${props => shade(0.2, props.theme.colors.primary)};
    }

    span {
      color: ${props => props.theme.colors.white};

      margin: 0 0 0 12px;
    }
  }
`;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5',
};

interface UploadMessageProps {
  type: 'default' | 'error' | 'success';
}

export const UploadMessage = styled.div<UploadMessageProps>`
  display: flex;

  color: ${props => messageColors[props.type]};
  align-items: center;
  justify-content: center;

  padding: 15px 0;
`;
