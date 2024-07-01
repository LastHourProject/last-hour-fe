import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MessageIcon } from './icons';
import { Typography } from './Typography';

export const CategoryTab = ({ data }) => {
  const router = useRouter();

  return (
    <Link
      className={classNames(
        'relative cursor-pointer flex flex-col items-center gap-2 text-center px-3.5 pt-5 after:absolute after:w-[1px] after:right-0 after:top-0 after:bottom-0 after:border-r-[0.3px] after:last:border-r-0',
        {
          'bg-secondary text-white after:border-secondary activeTab':
            router.pathname === data?.url,
          'text-secondary after:border-primary': router.pathname !== data?.url,
        },
      )}
      href={data?.url}
    >
      {data?.icon}

      <Typography
        as='h5'
        fontSize='16'
        color={router.pathname === data?.url ? 'white' : 'secondary'}
        weight={router.pathname === data?.url ? 'g-bold' : 'g-medium'}
        className='pb-4'
      >
        {data?.label}
      </Typography>
      {data?.message && (
        <div className='toolTip !absolute right-[10px] top-1/2 -translate-y-1/2'>
          <MessageIcon />
          <span className='toolTipText'>{data?.message}</span>
        </div>
      )}
    </Link>
  );
};
