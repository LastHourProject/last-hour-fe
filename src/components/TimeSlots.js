import classNames from 'classnames';

import { Typography } from './Typography';

export const TimeSlots = ({ active, data, id, onClick, ...rest }) => (
  <div
    className={classNames(
      'slot py-4 px-1 rounded-5 border cursor-pointer text-center',
      {
        ' border-primary': active,
        'border-secondary bg-white': !active,
      },
    )}
    onClick={() => onClick(id)}
    {...rest}
  >
    <Typography color={active ? 'primary' : 'secondary'}>
      {data?.title}
    </Typography>
    <Typography
      as='span'
      fontSize='14'
      color={active ? 'primary' : 'secondary'}
      fontType='g-regular'
    >
      {data?.slot}
    </Typography>
  </div>
);
