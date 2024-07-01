import { Typography } from './Typography';
import { AnalyticIcon, LineOneIcon, PlaneIcon } from './icons';

export const ListingCard = () => (
  <div className='relative bg-white shadow-[0px_0px_30px_0px_#00000080] w-full rounded-10 py-2 px-3 overflow-hidden'>
    <div className='flex gap-3 items-center justify-between'>
      <span className='absolute top-1'>
        <AnalyticIcon />
      </span>
      <div className='relative flex items-center gap-2'>
        <div className='relative'>
          <Typography as='h4' fontSize='18' fontType='g-semibold'>
            18:10
          </Typography>
          <Typography as='h4' fontType='g-semibold'>
            LHR
          </Typography>
        </div>
        <div className='relative text-center'>
          <Typography>24h</Typography>
          <div className='w-[100px] max-w-full border-b-2 border-dashed border-secondary relative my-2'>
            <span className='absolute left-1/2 -translate-x-1/2 -top-[6px]'>
              <PlaneIcon />
            </span>
          </div>
          <Typography>1 Stop</Typography>
        </div>
        <div className='relative'>
          <Typography as='h4' fontSize='18' fontType='g-semibold'>
            18:35<sup className='text-red'>+1</sup>
          </Typography>
          <Typography
            as='h4'
            fontSize='16'
            fontType='g-semibold'
            className='text-right'
          >
            SIN
          </Typography>
        </div>
      </div>
      <div className='relative h-full'>
        <LineOneIcon />
      </div>

      <div className='relative flex flex-col items-center justify-center'>
        <Typography
          as='h3'
          fontSize='24'
          fontType='g-semibold'
          className='tracking-wider'
        >
          £697.98
        </Typography>
        <Typography className='mb-3' fontType='g-regular'>
          Price per person
        </Typography>
      </div>
      <div className='relative h-[80px] border-r border-black'></div>

      <div className='relative text-center'>
        <Typography
          as='span'
          color='red'
          fontSize='14'
          fontType='g-medium'
          className='tag uppercase'
        >
          4 seats Left
        </Typography>
        <div className='flex items-center justify-center flex-col gap-2 pl-2 mt-3'>
          <img src='/images/country.png' alt='country' width='45' height='45' />
          <Typography
            as='h5'
            fontType='g-regular'
            fontSize='14'
            className='whitespace-nowrap truncate w-[100px] 2xl:w-auto'
          >
            United Dubai Airlines
          </Typography>
        </div>
      </div>
    </div>
  </div>
);
