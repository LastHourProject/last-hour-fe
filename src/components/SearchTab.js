import classNames from 'classnames';

import { MessageIcon } from './icons';

export const SearchTab = ({ data, id, active, onClick }) => (
  <div
    className='flex items-center gap-3 first:border-r-2 first:border-black first:pr-4 cursor-pointer'
    onClick={() => onClick(id)}
  >
    <h5
      className={classNames('text-base', {
        'font-bold text-primary  border-b-[3px] border-primary relative before:left-1/2 before:-translate-x-1/2 before:absolute before:-bottom-3 before:w-0 before:h-0 before:border-l-[12px] before:border-[12px] before:border-b-0 before:border-x-transparent before:border-t-primary':
          active,
        'text-black': !active,
      })}
    >
      {data?.label}
    </h5>
    <div className='toolTip'>
      <MessageIcon />
      <span className='toolTipText'>Lorem Ipsum</span>
    </div>
  </div>
);
