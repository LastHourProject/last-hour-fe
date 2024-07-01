import { Typography } from '../Typography';

const headingCss = 'tracking-[10%] uppercase mb-3 whitespace-nowrap';

export const Header = () => (
  <div className='relative pl-[200px]'>
    <div className='animation'>
      <div className='first'>
        <Typography as='h2' color='white' fontSize='18' className={headingCss}>
          Get Booking assistance by our advanced next generation Artificial
          Intelligence
        </Typography>
      </div>
      <div className='second'>
        <Typography as='h2' color='white' fontSize='18' className={headingCss}>
          Book your Tickets in just Minutes and Pay Less, Save Time & Money
        </Typography>
      </div>
    </div>
  </div>
);
