import classNames from 'classnames';
import { useState } from 'react';

import { Typography } from './Typography';

const TAB_LIST = [
  {
    id: 1,
    label: 'NON STOP',
  },
  {
    id: 2,
    label: 'one STOP',
  },
  {
    id: 3,
    label: 'more STOP',
  },
];

export const LocationCard = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='bg-white py-5 px-4 shadow-[0px_0px_30px_0px_#0000004D] h-full'>
      <div className='flex gap-5'>
        {TAB_LIST?.map((data) => (
          <div
            key={data?.id}
            className={classNames(
              'relative cursor-pointer whitespace-nowrap rounded-10 w-full flex flex-col items-center gap-2 text-center p-2 border border-secondary',
              {
                'bg-secondary text-white shadow-[0px_0px_10px_0px_#02B1F880]':
                  activeTab === data?.id,
                'text-black bg-transparent': activeTab !== data?.id,
              },
            )}
            onClick={() => setActiveTab(data?.id)}
          >
            <Typography
              as='h5'
              fontSize='12'
              color={activeTab === data?.id ? 'white' : 'secondary'}
              fontType={activeTab === data?.id ? 'g-bold' : 'g-medium'}
              className='uppercase'
            >
              {data?.label}
            </Typography>
          </div>
        ))}
      </div>
      <div className='mt-7'>
        {activeTab === 1 && (
          <div className='relative'>
            <div className='flex justify-between items-center mb-5'>
              <Typography as='h3' fontSize='30' color='black'>
                JFK
              </Typography>
              <Typography fontType='g-bold' fontSize='16' color='black'>
                Non-stop
              </Typography>
              <Typography as='h3' fontSize='30' color='black'>
                JFK
              </Typography>
            </div>
            <div className='relative'>
              <img src='/images/map.png' alt='map' className='w-full' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
