import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'transition-colors duration-500 bg-indigo-500  hover:bg-indigo-700 text-white font-bold text-lg py-3 px-4 rounded-md w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
