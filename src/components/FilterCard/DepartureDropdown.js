import { useState } from 'react';

import { TimeSlots } from '../TimeSlots';
import { Typography } from '../Typography';
import { ArrowDownIcon } from '../icons';

const TIME_SLOTS = [
  {
    id: 1,
    title: 'Morning',
    slot: '4:00am - 5:59am',
  },
  {
    id: 2,
    title: 'Afternoon',
    slot: '4:00am - 5:59am',
  },
  {
    id: 3,
    title: 'Evening',
    slot: '4:00am - 5:59am',
  },
  {
    id: 4,
    title: 'Night',
    slot: '4:00am - 5:59am',
  },
];

export const DepartureDropdown = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className='filter-div border-b border-light-gray pb-4 mb-4'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={handleDropdown}
      >
        <Typography as='h5' fontSize='18' fontType='g-medium'>
          Departure
        </Typography>
        <ArrowDownIcon />
      </div>
      {showDropdown && (
        <div className='filter-content mt-3'>
          <div className='timeSlots grid grid-cols-2 gap-3'>
            {TIME_SLOTS?.map((data) => (
              <TimeSlots
                id={data?.id}
                key={data?.id}
                data={data}
                active={activeTab === data?.id}
                onClick={(tabId) => setActiveTab(tabId)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
