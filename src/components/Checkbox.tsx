import { PropsWithChildren } from 'react';
import './Checkbox.css';
import React from 'react';

export interface CheckboxProps {
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value?: boolean;
  disabled?: boolean;
}

const Checkbox = React.forwardRef<
  HTMLInputElement,
  PropsWithChildren<CheckboxProps>
>(function Checkbox(props, ref) {
  const { id, value, onChange, onBlur, children } = props;

  return (
    <label className="Checkbox">
      <input
        id={id}
        type="checkbox"
        checked={value}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {children}
    </label>
  );
});

export default Checkbox;
