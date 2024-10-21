import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <div className="flex flex-col relative gap-3 h-max">
      <input ref={ref} {...props} />
      <span className="text-red-500 absolute -bottom-5 left-2">
        {props.errorMessage}
      </span>
    </div>
  );
});

export default Input;
