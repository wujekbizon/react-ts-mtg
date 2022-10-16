import React from 'react';
import './Button.scss';

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button {...rest} style={{ ...style }}>
    {title ?? children}
  </button>
);

export default Button;
