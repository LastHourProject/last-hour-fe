import Link from 'next/link';

import { LastHourLogo, LinkIcon } from '../icons';
import { CategoryTab } from '../CategoryTab';

import { categoryTabList } from '@/helpers/constant';

export const Header = () => (
  <header className='bg-white sticky top-0 z-[555555]'>
    <div className='relative px-[50px]'>
      <div className='flex gap-3 items-center'>
        <Link href='/' className='logo'>
          <LastHourLogo className='max-w-full' />
        </Link>
        <div className='categoryList flex flex-nowrap overflow-auto sm:overflow-visible sm:grid grid-cols-5'>
          {categoryTabList?.map((data) => (
            <CategoryTab key={data?.id} data={data} />
          ))}
        </div>
        <div className='flex gap-0.5 items-center'>
          <div className='flex items-center w-max gap-1 text-black font-g-medium bg-silver whitespace-nowrap rounded-10 py-3 px-3 mr-2'>
            English (US)
            <img src='/images/flag.svg' alt='flag' /> India ₹ INR
          </div>
          <div className='flex items-center gap-1 whitespace-nowrap'>
            <div className='w-[6px] h-[20px] border-l-2 border-black'></div>
            <span className='flex items-center font-g-medium text-base font-normal text-secondary gap-1'>
              <LinkIcon />
              Partner Portal
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
);
