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

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  maxCharacters?: number;
}

const Textarea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  const { colors } = useContext(ThemeContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [characters, setCharacters] = useState(0);

  const handleChange = useCallback(() => {
    if (textareaRef.current) setCharacters(textareaRef.current.value.length);
  }, []);

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
        onChange={handleChange}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        onPaste={handleChange}
        defaultValue={defaultValue}
        ref={textareaRef}
        cols={2}
        rows={8}
        {...rest}
      />

      <span>{characters} de 8000 caracteres</span>
    </Container>
  );
};

export default Textarea;
