import React from 'react';
import './TextField.css';
import { FieldError } from 'react-hook-form';

export interface TextFieldProps {
  label: string;
  type: 'text' | 'password' | 'email';
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  value?: string;
  error?: FieldError | undefined;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(props, ref) {
    const { name, label, type, disabled, value, onChange, onBlur, error } =
      props;

    const hasError = !!error;

    return (
      <div className={`TextField ${hasError ? 'error' : ''}`}>
        <input
          type={type}
          id={name}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          placeholder=""
        />
        <label htmlFor={name}>{label}</label>
        {hasError && (
          <div className="error-message" role="alert">
            {error.message}
          </div>
        )}
      </div>
    );
  }
);

export default TextField;
