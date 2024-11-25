import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './Button.scss';

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
