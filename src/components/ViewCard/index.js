import Link from 'next/link';

import { Typography } from '../Typography';

export const ViewCard = ({ data }) => (
  <div className='relative flex'>
    <div className='bg-secondary px-6 flex items-center justify-center min-w-[188px] max-w-[188px]'>
      <Typography as='h3' color='white' fontSize='18' className='uppercase'>
        {data?.title}
      </Typography>
    </div>
    <div
      className='bg-cover bg-no-repeat h-[227px] w-full py-7 px-7'
      style={{
        backgroundImage: `url(${data?.img ? data?.img : '/images/aboutCardbg.svg'})`,
      }}
    >
      <Typography
        fontSize='18'
        fontType='g-bold'
        color='white'
        className='capitalize'
      >
        {data?.text}
      </Typography>
      <Link href={data?.url} className='absolute bottom-0 right-3'>
        <button className='bg-pink rounded-t-5 px-3 py-2 text-white font-g-bold text-base'>
          {data?.buttonText}
        </button>
      </Link>
    </div>
  </div>
);
