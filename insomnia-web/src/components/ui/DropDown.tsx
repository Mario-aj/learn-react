import { useState, MouseEventHandler } from 'react';

type OptionProps = {
  title: string;
  color?: string;
};

type DropDownProps = {
  className?: string;
  selectedOption: OptionProps;
  onSelectedOption: (opt: any) => void;
  options: Array<OptionProps>;
};

type MethodProps = {
  method: OptionProps;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
};

const Method = ({ method, onClick, className }: MethodProps) => {
  const { title, color } = method;

  return (
    <span
      onClick={onClick}
      className={`text-${color}-500 cursor-pointer text-xs select-none ${className}`}
    >
      {title}
    </span>
  );
};

const DropDown = ({
  options,
  className,
  selectedOption,
  onSelectedOption,
}: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex items-center justify-center cursor-pointer gap-1"
        onClick={() => setOpen(!open)}
      >
        <Method method={selectedOption} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {open && (
        <div className="bg-white rounded flex flex-col absolute top-9 gap-2 -left-2 w-40">
          {options?.map((option) => (
            <Method
              method={option}
              className="hover:bg-gray-300 transition-all duration-200 h-full p-2 w-full"
              onClick={() => {
                onSelectedOption(option);
                setOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
