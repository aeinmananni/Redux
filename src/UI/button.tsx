import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonProps = {
  text?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {text}
      </button>
    );
  }
);

export default Button;
