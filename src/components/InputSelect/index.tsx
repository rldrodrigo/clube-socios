import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { SelectProps } from '@mui/material/Select';
import { Container, InputSelectArea } from './styles';

type OptionType = {
  label: string;
  value: string;
};

interface InputSelectProps extends SelectProps {
  label?: string;
  options: OptionType[];
  placeholder?: string;
  className?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  options,
  placeholder,
  className,
  ...rest
}) => (
  <Container className={className || ''}>
    {label && <span>{label}</span>}
    <InputSelectArea >
        <select name="" id="">
            <option value="">Selecione</option>
        {options?.map((option, index) => (
            <option value={option.value} key={option.label}>
                {option.label}
            </option>
        ))}
        </select>
    </InputSelectArea>
  </Container>
);

export { InputSelect };
