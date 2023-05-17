import React, { InputHTMLAttributes } from 'react';

import { Container, InputArea } from './styles';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, error, className, ...rest }, ref) => (
    <Container className={className}>
      {label && <span>{label}</span>}
      <InputArea>
        <input {...rest} ref={ref} />
      </InputArea>
    </Container>
  ),
);

export { InputText };
