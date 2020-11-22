import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container, Label } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

const Checkbox: React.FC<CheckboxProps> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, defaultValue = [], registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      {options.map((option, index) => (
        <Label htmlFor={option.id} key={option.id}>
          {option.label}

          <input
            id={option.id}
            name={name}
            type="checkbox"
            value={option.value}
            defaultChecked={defaultValue.find((dv: string) => dv === option.id)}
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            {...rest}
          />

          <span />
        </Label>
      ))}
    </Container>
  );
};

export default Checkbox;
