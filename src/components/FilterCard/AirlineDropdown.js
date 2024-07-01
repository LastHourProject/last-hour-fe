import { useState } from 'react';

import { Typography } from '../Typography';
import { ArrowDownIcon } from '../icons';

export const AirlineDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  const handleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className='filter-div pb-4'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={handleDropdown}
      >
        <Typography as='h5' fontSize='18' fontType='g-medium'>
          Airlines
        </Typography>
        <ArrowDownIcon />
      </div>
      {showDropdown && (
        <div className='filter-content mt-3'>
          <div className='pl-0'>
            <div className='relative'>
              <div className='list mt-3'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div className='flex justify-between mb-3' key={index}>
                    <div className='flex items-center gap-2'>
                      <input type='checkbox' id={index} />
                      <Typography
                        as='label'
                        fontType='g-regular'
                        fontSize='14'
                        htmlFor={index}
                      >
                        Emirates Airline
                      </Typography>
                    </div>
                    <Typography
                      as='label'
                      fontType='g-regular'
                      fontSize='14'
                      htmlFor={index}
                    >
                      (02)
                    </Typography>
                  </div>
                ))}

                <Typography className='cursor-pointer'>
                  Show all airlines
                </Typography>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
