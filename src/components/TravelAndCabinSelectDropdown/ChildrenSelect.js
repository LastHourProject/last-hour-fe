import { useState } from 'react';
import classNames from 'classnames';

import { FlexBox } from '../FlexBox';
import { Typography } from '../Typography';

export const ChildrenSelect = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const options = [];

  for (let i = 0; i <= 15; i++) {
    options.push(i);
  }

  return (
    <div className='relative mt-5'>
      <FlexBox justifyContent='between' className='children'>
        <div className='relative'>
          <Typography as='h5'>Children</Typography>
          <Typography fontType='g-regular'>Aged 0 to 15</Typography>
        </div>
        <FlexBox alignItems='center'>
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className={classNames(
              'minus bg-silver w-10 h-10 rounded-10 text-2xl',
              {
                ['opacity-50 cursor-not-allowed']: count === 0,
              },
            )}
            onClick={decrement}
          >
            -
          </FlexBox>
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className='count w-10 h-10 font-g-bold text-xl'
          >
            {count}
          </FlexBox>
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className={classNames(
              'plus bg-silver w-10 h-10 rounded-10 text-2xl',
              {
                ['opacity-50 cursor-not-allowed']: count === 8,
              },
            )}
            onClick={increment}
          >
            +
          </FlexBox>
        </FlexBox>
      </FlexBox>
      {Array?.from({ length: count }).map((_, index) => (
        <div className='relative mt-4' key={index}>
          <Typography fontType='g-semibold'>
            Age of child {index + 1}{' '}
          </Typography>
          <select className='font-g-medium text-secondary w-full border border-secondary mt-2 h-14 rounded-10'>
            <option className='hidden'>Select age</option>
            {options?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
