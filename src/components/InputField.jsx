// src/components/InputField.jsx
import React from 'react';
import styled from 'styled-components';

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  &.error input,select{
    border: 1px solid lightpink;
  }
`;

const Label = styled.label`
  font-weight: 400;
  text-transform: capitalize;
  font-size: 12px;
  margin-bottom: 0.5rem;
  color: #182844;
`;

const StyledInput = styled.input`
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
  
`;

const StyledSelect = styled.select`
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

const Datalist = styled.datalist``;

export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  placeholder = '',
  options = [], // for select
  autoCompleteList = [], // for input[type="text"] + datalist
}) {
  const inputId = `input-${name}`;
  const hasDatalist = autoCompleteList.length > 0;

  return (
    <StyledFormInput>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      {type === 'select' ? (
        <StyledSelect id={inputId} name={name} value={value} onChange={onChange}>
          <option value="">Select</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <>
          <StyledInput
            id={inputId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            list={hasDatalist ? `${inputId}-list` : undefined}
            placeholder={placeholder}
          />
          {hasDatalist && (
            <Datalist id={`${inputId}-list`}>
              {autoCompleteList.map((item, idx) => (
                <option key={idx} value={item} />
              ))}
            </Datalist>
          )}
        </>
      )}
    </StyledFormInput>
  );
}
