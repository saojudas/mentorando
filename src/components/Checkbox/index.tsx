import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => (
  <Container>
    {label}
    <input type="checkbox" />
    <span />
  </Container>
);

export default Checkbox;
