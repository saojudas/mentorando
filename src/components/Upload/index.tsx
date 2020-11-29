import React, { useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import Dropzone from 'react-dropzone';

import { IRootState } from '../../store';
import { uploadThumbnailFailure } from '../../store/modules/video/actions';

import { DropContainer, UploadMessage, Preview } from './styles';

interface UploadProps {
  onUpload(files: any): Promise<void>;
  message?: string;
}

const Upload: React.FC<UploadProps> = ({ onUpload, message }) => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const video = useSelector((state: IRootState) => state.video);

  const renderDragMessage = useCallback(
    (isDragActive: boolean, isDragReject: boolean) => {
      if (!isDragActive) {
        return (
          <UploadMessage type="default">
            {message || 'Arraste arquivos aqui...'}
          </UploadMessage>
        );
      }

      if (isDragReject) {
        return (
          <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        );
      }

      return (
        <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
      );
    },
    [message],
  );

  const handleDelete = useCallback(() => {
    dispatch(uploadThumbnailFailure());
  }, [dispatch]);

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          hasFile={!!video?.thumbnail}
        >
          <input {...getInputProps()} />

          {video && video.thumbnail ? (
            <Preview>
              <img src={video.thumbnail.url} alt="Thumbnail" />

              <button type="button" onClick={handleDelete}>
                <FaEdit size={16} color={colors.white} />

                <span>Clique aqui para trocar a thumbnail do seu vídeo</span>
              </button>
            </Preview>
          ) : (
            renderDragMessage(isDragActive, isDragReject)
          )}
        </DropContainer>
      )}
    </Dropzone>
  );
};

export default Upload;
