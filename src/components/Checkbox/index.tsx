import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => (
  <Container>
    {label}
    <input type="checkbox" {...rest} />
    <span />
  </Container>
);

export default Checkbox;
