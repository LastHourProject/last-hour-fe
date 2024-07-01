import { useState } from 'react';

import { Typography } from '../Typography';
import { ArrowDownIcon } from '../icons';

export const LocationDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  const handleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className='filter-div border-b border-light-gray pb-4 mb-4'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={handleDropdown}
      >
        <Typography as='h5' fontSize='18' fontType='g-medium'>
          Locations
        </Typography>
        <ArrowDownIcon />
      </div>
      {showDropdown && (
        <div className='filter-content mt-3'>
          <div className='pl-4'>
            <Typography>Outbound</Typography>
            <Typography fontType='g-regular' fontSize='14'>
              London - Singapore
            </Typography>
            <div className='relative mt-5'>
              <Typography>Departure Location</Typography>
              <div className='list mt-3'>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div className='flex justify-between mb-3' key={index}>
                    <Typography
                      as='label'
                      fontType='g-regular'
                      fontSize='14'
                      htmlFor={index}
                    >
                      London Gatwick (LGW)
                    </Typography>
                    <input type='checkbox' id={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
