import { Typography } from './Typography';
import { WorkCard } from './WorkCard';
import {
  AiIcon,
  ArrowsIcon,
  CarromIcon,
  SearchBlueIcon,
  TipIcon,
} from './icons';

const WORK_DATA = [
  {
    id: 1,
    text: 'Select Travel Dates Within 7 days & Click ready for Booking ready for Booking',
    icon: <SearchBlueIcon />,
  },
  {
    id: 2,
    text: 'Select Travel Dates Within 7 days & Click ready for Booking ready for Booking',
    icon: <AiIcon />,
  },
  {
    id: 3,
    text: 'Select Travel Dates Within 7 days & Click ready for Booking ready for Booking',
    icon: <CarromIcon />,
  },
  {
    id: 4,
    text: 'Select Travel Dates Within 7 days & Click ready for Booking ready for Booking',
    icon: <AiIcon />,
  },
  {
    id: 5,
    text: 'Select Travel Dates Within 7 days & Click ready for Booking ready for Booking',
    icon: <TipIcon />,
  },
];
export const HowDoesWorkSection = () => (
  <section className='py-10'>
    <div className='container mx-auto'>
      <div className='relative shadow-[0px_0px_60px_0px_#00000040] bg-white rounded-[30px] py-[70px] px-[40px]'>
        <div className='relative'>
          <Typography as='h2' fontType='g-black' fontSize='24'>
            How Does{' '}
            <Typography as='span' fontSize='32' color='primary'>
              LastHour Booking
            </Typography>{' '}
            Work?
          </Typography>
          <div className='relative flex items-center mt-20 gap-4'>
            {WORK_DATA?.map((data, index) => (
              <>
                <WorkCard key={data?.id} data={data} />
                {WORK_DATA?.length !== index + 1 && <ArrowsIcon />}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
