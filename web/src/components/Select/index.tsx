import React, { useEffect, useRef } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as ReactSelectProps,
} from 'react-select';
import { useField } from '@unform/core';

import { useStyles } from './styles';

interface SelectProps extends ReactSelectProps<OptionTypeBase> {
  name: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ name, disabled, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

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
      classNamePrefix="react-select"
      styles={useStyles(error)}
      ref={selectRef}
      isDisabled={disabled}
      {...rest}
    />
  );
};

export default Select;
