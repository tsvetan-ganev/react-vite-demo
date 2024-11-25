import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './Button.css';

export default function Button(
  props: PropsWithChildren<ButtonHTMLAttributes<unknown>>
) {
  const { children, ...restProps } = props;

  return (
    <button className="Button" {...restProps}>
      {children}
    </button>
  );
}
