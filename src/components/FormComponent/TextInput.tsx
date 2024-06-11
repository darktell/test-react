import cn from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  isDisabled?: boolean;
  containerClassName?: string;
  className?: string;
}

const TextInput: FC<Props> = ({
  name,
  isDisabled,
  containerClassName,
  className,
  ...props
}) => {
  const [field, { error, touched }] = useField(name);
  const showError = touched && !!error && !isDisabled;

  return (
    <div className={twMerge("w-full", containerClassName)}>
      <input
        id={`${name}-form-input`}
        type={props.type || "text"}
        className={cn(
          twMerge(
            "appearance-none rounded-lg w-full border border-transparent outline-none py-2 px-3 focus:border-gray hover:border-gray",
            className,
          ),
          {
            "!border-red-500 focus:border-red-500 hover:border-red-500":
              showError,
          },
        )}
        {...props}
        {...field}
      />
    </div>
  );
};

export default TextInput;
