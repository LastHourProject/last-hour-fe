import { Button } from './Button';
import { Typography } from './Typography';
import { CalendarIcon, UserIcon } from './icons';

export const NewsCard = () => (
  <div className='card shadow-[0px_0px_60px_0px_#00000040] bg-white py-4 px-6 rounded-10'>
    <div className='flex gap-6'>
      <div className='image'>
        <img
          src='/images/blog1.png'
          alt='img'
          className='min-w-[190px] max-w-[190px] h-[160px] object-cover'
        />
      </div>
      <div className='content'>
        <div className='flex gap-3'>
          <div className='flex items-center gap-1 text-primary border-r-2 border-secondary pr-3'>
            <UserIcon />
            <Typography as='span' fontType='g-semibold' fontSize='14'>
              User Name
            </Typography>
          </div>
          <div className='flex items-center gap-1 text-primary'>
            <CalendarIcon />
            <Typography as='span' fontType='g-semibold' fontSize='14'>
              07 Jun, 2024
            </Typography>
          </div>
        </div>
        <Typography as='h5' fontSize='20' className='mt-3'>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography fontSize='14' fontType='g-semibold' className='mt-1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button className='mt-3 bg-primary shadow-[0px_0px_20px_0px_#02B1F880] text-white rounded-10 h-[39px] w-[130px] font-g-bold'>
          Read More
        </Button>
      </div>
    </div>
  </div>
);
