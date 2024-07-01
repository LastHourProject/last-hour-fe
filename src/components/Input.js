import { useState } from 'react';
import classNames from 'classnames';

import { Typography } from './Typography';
import { EyeOpenIcon } from './icons/EyeOpenIcon';
import { EyeClosedIcon } from './icons/EyeClosedIcon';

const Input = ({
  type,
  name,
  placeholder,
  register,
  className,
  error,
  validationRules,
  label,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputCss =
    'w-full  border-b-color rounded-5 h-12 px-3 focus-visible:outline-secondary ';

  function renderInput() {
    switch (type) {
      case 'password':
        return (
          <>
            <input
              className={inputCss}
              type={showPassword ? 'text' : 'password'}
              placeholder={placeholder}
              {...register(name, validationRules)}
              {...rest}
            />
            <span
              className='absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer'
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>
          </>
        );

      case 'textarea':
        return (
          <textarea
            className={`pt-2 resize-none ${inputCss}`}
            rows='5'
            type={type}
            placeholder={placeholder}
            {...register(name, validationRules)}
            {...rest}
          />
        );

      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            className={inputCss}
            onWheel={(e) => e.target.blur()}
            {...register(name, validationRules)}
            {...rest}
          />
        );
    }
  }

  return (
    <div className='w-full'>
      {label ? (
        <>
          <Typography
            as='label'
            fontSize='12'
            weight='semibold'
            color='secondaryLight'
            className='inline-block mb-1'
          >
            {label}
          </Typography>
          {validationRules?.required ? (
            <Typography as='span' color='red' fontSize='12'>
              *
            </Typography>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
      <div
        className={classNames(
          'w-full h-[52px] border rounded-5 relative border-light',
          {
            [className]: className,
            ['h-full']: type === 'textarea',
          },
        )}
      >
        {renderInput()}
      </div>
      {error ? (
        <Typography as='span' color='red' fontSize='12' weight='medium'>
          {error}
        </Typography>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
