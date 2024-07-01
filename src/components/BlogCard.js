import Link from 'next/link';

import { Typography } from './Typography';

export const BlogCard = ({ data }) => (
  <div className='card shadow-[0px_0px_50px_0px_#0000004D] bg-white rounded-10 py-8 px-10'>
    <div className='image'>
      <img
        src={data?.img}
        alt='img'
        className='w-full h-[274px] object-cover rounded-10'
      />
    </div>
    <div className='content mt-6'>
      <Link href={data?.url}>
        <Typography as='h3' fontSize='30' className='mb-2'>
          {data?.title}
        </Typography>
      </Link>
      <Typography fontSize='18'>{data?.text}</Typography>
    </div>
  </div>
);
