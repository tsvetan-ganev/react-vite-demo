import { PropsWithChildren } from 'react';
import './Checkbox.scss';
import React from 'react';

export interface CheckboxProps {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value?: 'on' | 'off';
  disabled?: boolean;
}

const Checkbox = React.forwardRef<
  HTMLInputElement,
  PropsWithChildren<CheckboxProps>
>(function Checkbox(props, ref) {
  const { name, onChange, value, onBlur, children } = props;

  return (
    <label className="Checkbox">
      <input
        id={name}
        name={name}
        type="checkbox"
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {children}
    </label>
  );
});

export default Checkbox;
