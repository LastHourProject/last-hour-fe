import classNames from 'classnames';

export const FlexBox = ({
  alignItems = 'start',
  justifyContent = 'start',
  gap = '0',
  direction = 'row',
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    'flex',
    {
      'flex-row': direction === 'row',
      'flex-col': direction === 'column',
      'items-start': alignItems === 'start',
      'items-center': alignItems === 'center',
      'items-end': alignItems === 'end',
      'justify-start': justifyContent === 'start',
      'justify-center': justifyContent === 'center',
      'justify-end': justifyContent === 'end',
      'justify-between': justifyContent === 'between',
    },
    className,
    {
      [`gap-${gap}`]: gap,
    },
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
