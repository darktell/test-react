import cn from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  placeholder?: string;
  isDisabled?: boolean;
  containerClassName?: string;
  classNames?: string;
}

const TextArea: FC<Props> = ({
  isDisabled,
  containerClassName,
  name,
  placeholder,
  classNames,
  ...props
}) => {
  const [field, { error, touched }] = useField(name);

  const showError = touched && !!error && !isDisabled;

  return (
    <div className={twMerge("w-full", containerClassName)}>
      <textarea
        className={cn(
          twMerge(
            "max-h-[200px] min-h-[100px] rounded-lg w-full outline-none border border-transparent focus:border-gray hover:border-gray p-2",
            classNames,
          ),
          {
            "!border-red-500 focus:border-red-500 hover:border-red-500":
              showError,
          },
        )}
        placeholder={placeholder}
        rows={4}
        {...field}
        {...props}
      />
    </div>
  );
};

export default TextArea;
