/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { useField } from '@unform/core';
import { ThemeContext } from 'styled-components';
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import pt_br from 'date-fns/locale/pt-BR';

import { Container, Error } from './styles';

registerLocale('pt-BR', pt_br);

interface DatePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, ...rest }) => {
  const { colors } = useContext(ThemeContext);
  const inputRef = useRef<ReactDatePicker>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [date, setDate] = useState(defaultValue || null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    const input = inputRef.current?.state;
    setIsFocused(false);
    setIsFilled(!!input);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {error && (
        <Error title={error}>
          <FaInfoCircle color={colors.red} size={20} />
        </Error>
      )}
      <ReactDatePicker
        selected={date}
        onChange={setDate}
        className="picker"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        locale="pt-BR"
        {...rest}
      />
    </Container>
  );
};

export default DatePicker;
