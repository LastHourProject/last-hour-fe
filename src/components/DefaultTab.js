import classNames from 'classnames';

import { Typography } from './Typography';

export const DefaultTab = ({ data, id, active, onClick, ...rest }) => (
  <div
    key={data?.id}
    className={classNames(
      'relative cursor-pointer w-full flex flex-col items-center gap-2 text-center p-3 border border-black',
      {
        'bg-primary text-white': active,
        'text-black': !active,
      },
    )}
    onClick={() => onClick(id)}
    {...rest}
  >
    <Typography
      as='h5'
      color={active ? 'white' : 'black'}
      fontSize='12'
      fontType={active ? 'g-bold' : 'g-medium'}
    >
      {data?.label}
    </Typography>
  </div>
);
