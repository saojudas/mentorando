/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useRef, useContext } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as ReactSelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { ThemeContext } from 'styled-components';

interface SelectProps extends ReactSelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
  const { colors } = useContext(ThemeContext);
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  console.log(error);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
      styles={{
        control: (styles, state) => ({
          ...styles,
          borderRadius: 4,
          padding: '2px 5px',
          border: `2px solid ${colors.primaryLighter} !important`,
          '&:hover': {
            boxShadow: `inset 0 0 1em transparent, 0 0 0.4em ${colors.primary}`,
          },
          '&:focus': {
            color: colors.primary,
            borderColor: colors.primary,
          },
          borderColor: error !== undefined ? colors.red : colors.primary,
          boxShadow: 'none',
        }),
        option: (styles, { isSelected }) => ({
          ...styles,
          backgroundColor: isSelected && colors.primary,
          color: colors.black,
        }),
      }}
    />
  );
};

export default Select;
