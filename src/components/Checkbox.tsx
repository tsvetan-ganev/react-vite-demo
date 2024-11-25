import { PropsWithChildren } from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  id: string;
}

export default function Checkbox(props: PropsWithChildren<CheckboxProps>) {
  return (
    <label className="Checkbox">
      <input id={props.id} type="checkbox" />
      {props.children}
    </label>
  );
}
