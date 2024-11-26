import React from 'react';
import './TextField.scss';
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
  required?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(props, ref) {
    const {
      name,
      label,
      type,
      disabled,
      required,
      value,
      onChange,
      onBlur,
      error,
    } = props;

    const hasError = !!error;

    return (
      <div className={`TextField ${hasError ? 'error' : ''}`}>
        <div className="input-wrapper">
          <input
            type={type}
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            required={required}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${name}-error` : undefined}
            placeholder={label}
          />
          <label htmlFor={name}>{label}</label>
        </div>
        {hasError && (
          <div id={`${name}-error`} className="error-message" role="alert">
            {error.message}
          </div>
        )}
      </div>
    );
  }
);

export default TextField;
