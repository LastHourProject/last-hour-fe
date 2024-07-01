import { LastHourLogo } from './icons';
import { Typography } from './Typography';
import { ViewCard } from './ViewCard';

const DATA = [
  {
    id: 1,
    title: ' About LastHour.com Technology',
    text: 'Learn more about Hybrid web3 platform with blockchain and ai',
    buttonText: 'Click Here',
    url: '/',
  },
  {
    id: 2,
    title: 'Listing Your Property with us?',
    text: 'Learn how Easy and Beneficial for you',
    buttonText: 'Click Here',
    url: '/',
  },
];

export const AboutSection = () => (
  <section className='bg-[#E7E7E780] shadow-[0px_4px_4px_0px_#00000040] py-[70px]'>
    <div className='container mx-auto'>
      <div className='row flex gap-5 items-center'>
        <div className='sm:w-2/5'>
          <div className='relative'>
            <LastHourLogo className='max-w-full' />
            <Typography color='secondary' fontSize='20' className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </div>
        </div>
        <div className='sm:w-3/5'>
          <div className='relative'>
            <div className='grid grid-cols-2 gap-8'>
              {DATA?.map((data) => (
                <ViewCard key={data?.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
