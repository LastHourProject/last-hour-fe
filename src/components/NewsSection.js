import { Button } from './Button';
import { NewsCard } from './NewsCard';
import { Typography } from './Typography';

export const NewsSection = () => (
  <section
    className='bg-secondary py-10'
    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 93%)' }}
  >
    <div className='container mx-auto'>
      <div className='flex justify-between gap-3'>
        <Typography as='h3' color='white' fontSize='36'>
          Our Latest News
        </Typography>
        <Button className='shadow-[0px_0px_20px_0px_#02B1F880] bg-primary rounded-10 text-white py-3 px-8 font-g-bold text-lg'>
          See More
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-20 mt-4'>
        {Array.from({ length: 2 }).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </div>
  </section>
);
