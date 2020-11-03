import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useContext,
  TextareaHTMLAttributes,
} from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { useField } from '@unform/core';
import { ThemeContext } from 'styled-components';

import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  maxCharacters?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
  const { colors } = useContext(ThemeContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  // const [characters, setCharacters] = useState(0);

  const handleTextareaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextareaBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textareaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {error && (
        <Error title={error}>
          <FaInfoCircle color={colors.red} size={20} />
        </Error>
      )}

      <textarea
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        defaultValue={defaultValue}
        ref={textareaRef}
        cols={2}
        rows={8}
        {...rest}
      />
      <span>0 de 8000 caracteres</span>
    </Container>
  );
};

export default TextArea;
