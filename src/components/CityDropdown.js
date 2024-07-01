import { Typography } from './Typography';
import { FlightIcon, SearchIcon } from './icons';

import { CITY_LIST } from '@/helpers/constant';

export const CityDropdown = ({ handleClick }) => (
  <div
    onClick={(e) => e.stopPropagation()}
    className='absolute top-full mt-2 bg-white rounded-md shadow-[0_1px_6px_0_rgb(0_0_0_/_20%)] w-[316px] right-0 min-h-[316px] z-[55555] overflow-hidden'
  >
    <div className='search flex items-center gap-3 bg-white shadow-lg p-3'>
      <SearchIcon />
      <input
        type='search'
        placeholder='From'
        className='w-full text-base font-bold outline-0 border-0'
      />
    </div>
    <div className='content py-2'>
      <Typography
        as='h6'
        color='slate-gray'
        fontSize='12'
        className='px-3 uppercase'
      >
        POPUlar cities
      </Typography>
      <div className='list mt-3 overflow-auto max-h-[216px] customeScroll'>
        {CITY_LIST?.map((data) => (
          <div
            key={data?.id}
            onClick={() => handleClick(data)}
            className='listItem flex justify-between gap-2 hover:bg-[#f2f2f2] px-[10px] py-[5px]'
          >
            <div className='flex gap-2'>
              <FlightIcon className='w-5 h-5' />
              <div className='relative'>
                <Typography
                  as='h5'
                  fontSize='14'
                  color='black'
                  className='mb-1'
                >
                  {data?.title}
                </Typography>
                <Typography color='description' className='truncate w-[210px]'>
                  {data?.text}
                </Typography>
              </div>
            </div>
            <div className='text-description font-bold text-xs'>
              {data?.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
