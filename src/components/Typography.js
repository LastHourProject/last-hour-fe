import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const stylesMap = {
  10: 'text-[10px] leading-4',
  12: 'text-xs',
  14: 'text-sm',
  16: 'text-base',
  18: 'text-lg',
  20: 'text-xl',
  22: 'text-[22px] leading-[34px]',
  24: 'text-2xl',
  28: 'text-[28px] leading-[38px]',
  30: 'text-3xl',
  32: 'text-[32px] leading-9',
  36: 'text-4xl',
  40: 'text-[40px] leading-[50px]',
  48: 'text-5xl',
  60: 'text-4xl md:text-6xl',
  'g-regular': 'font-g-regular',
  'g-medium': 'font-g-medium',
  'g-semibold': 'font-g-semibold',
  'g-bold': 'font-g-bold',
  'g-black': 'font-g-black',
  'g-extrabold': 'font-g-extrabold',
  secondary: 'text-secondary',
  'secondary-second': 'text-secondary-second',
  primary: 'text-primary',
  white: 'text-white',
  'medium-gray': 'text-medium-gray',
  black: 'text-black',
  blue: 'text-blue',
  'light-blue': 'text-light-blue',
  'water-sky': 'text-water-sky',
  'light-sky': 'text-light-sky',
  'light-gray': 'text-light-gray',
  'transparent-light-gray': 'text-transparent-light-gray',
  'slate-gray': 'text-slate-gray',
  'dim-gray': 'text-dim-gray',
  'red-dark': 'text-red-dark',
  silver: 'text-silver',
  red: 'text-red',
  orange: 'text-orange',
  green: 'text-[#03E17B]',
  pink: 'text-pink',
  yellow: 'text-yellow',
  'yellow-500': 'text-yellow-500',
  'light-500': 'text-light-500',
  description: 'text-description',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Typography = ({
  as = 'p',
  children,
  fontType = '',
  fontSize = '16',
  color = 'secondary',
  className,
  weight = 'normal',
  ...rest
}) => {
  const Wrapper = as;

  const variantClass = stylesMap[fontType];
  const sizeClass = stylesMap[fontSize];
  const colorClass = stylesMap[color];
  const weightClass = stylesMap[weight];

  return (
    <Wrapper
      className={twMerge(
        classNames(variantClass, sizeClass, colorClass, weightClass, className),
      )}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};
