import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

export default Input;
