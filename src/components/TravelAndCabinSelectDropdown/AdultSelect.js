import { useState } from 'react';
import classNames from 'classnames';

import { FlexBox } from '../FlexBox';
import { Typography } from '../Typography';

export const AdultSelect = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <FlexBox justifyContent='between' className='adults mt-5'>
      <div className='relative'>
        <Typography as='h5'>Adults</Typography>
        <Typography fontType='g-regular'>Aged 16+</Typography>
      </div>
      <FlexBox alignItems='center'>
        <FlexBox
          alignItems='center'
          justifyContent='center'
          className={classNames(
            'minus bg-silver w-10 h-10 rounded-10 text-2xl',
            {
              ['opacity-50 cursor-not-allowed']: count === 1,
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
  );
};
