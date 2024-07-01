import Link from 'next/link';

import { Container } from '../Container';
import { Typography } from '../Typography';

import { FOOTER_LINKS, MOBILE_ICONS, SOCIAL_ICONS } from '@/helpers/constant';

export const Footer = () => (
  <footer style={{ clipPath: 'polygon(0 7%, 100% 0, 100% 100%, 0 100%)' }}>
    <div className='bg-secondary py-8'>
      <Container>
        <div className='w-full gap-3 sm:gap-0 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
          {FOOTER_LINKS?.map((data) => (
            <div className='wrapper' key={data?.id}>
              <Typography as='h3' color='white' fontSize='18' className='mb-5'>
                {data?.title}
              </Typography>
              <ul>
                {data?.list?.map((list) => (
                  <li
                    className='text-white font-g-medium text-base mb-2'
                    key={list?.id}
                  >
                    <Link href={list?.url}>{list?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='wrapper'>
            <Typography as='h3' color='white' fontSize='18' className='mb-3'>
              Connect with us
            </Typography>
            <div className='flex gap-2 mb-3'>
              {SOCIAL_ICONS?.map((social, index) => (
                <div key={index} className='flex'>
                  <span className='w-[30px] h-[30px] rounded-full bg-primary text-white flex items-center justify-center cursor-pointer'>
                    {social.icon}
                  </span>
                </div>
              ))}
            </div>
            <Typography as='h3' color='white' fontSize='18' className='mb-3'>
              Mobile app
            </Typography>
            <div className='flex gap-2'>
              {MOBILE_ICONS?.map((mobile, index) => (
                <div key={index} className='flex'>
                  <span className='w-[30px] h-[30px] rounded-full bg-primary text-white flex items-center justify-center cursor-pointer'>
                    {mobile.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className='w-full flex justify-center py-3 relative border-t border-white bg-secondary'>
      <Link href='/'>
        <Typography as='h3' color='white' fontSize='30'>
          LastHour
          <Typography as='span' fontSize='28' color='primary'>
            .com
          </Typography>
        </Typography>
      </Link>

      <div className='hidden sm:block'>
        <Typography
          color='white'
          fontSize='16'
          className='absolute top-1/2 -translate-y-1/2 right-20'
        >
          © 2024 LAST HOUR.COM
        </Typography>
      </div>
    </div>
  </footer>
);
