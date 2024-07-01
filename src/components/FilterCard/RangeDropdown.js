import { useState } from 'react';

import { Typography } from '../Typography';
import { ArrowDownIcon } from '../icons';

export const RangeDropdown = () => {
  const [value, setValue] = useState(50);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className='filter-div border-b border-light-gray pb-4 mb-4'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={handleDropdown}
      >
        <Typography as='h5' fontSize='18' fontType='g-medium'>
          Price Range
        </Typography>
        <ArrowDownIcon />
      </div>
      {showDropdown && (
        <div className='filter-content mt-3'>
          <div className='flex justify-between items-center'>
            <Typography fontType='g-regular'>$100</Typography>
            <Typography fontType='g-regular'>$3000</Typography>
          </div>
          <input
            type='range'
            min='1'
            max='100'
            className='inputSlider'
            value={value}
            onChange={handleSliderChange}
          />
        </div>
      )}
    </div>
  );
};
