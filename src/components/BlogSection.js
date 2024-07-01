import { BlogCard } from './BlogCard';

const BLOG_DATA = [
  {
    id: 1,
    title:
      'Our Exclusive Features : Create your own Itinery/Trip Powered by AI',
    text: 'Do you like to Travel around the world for Holiday or Business meetings ..Whether you are Solo Traveler, Or Travelling with Groups and Family.Plan and Book your Trip Including Flights+Hotels+Airport Transfer Using our Advanced Artificial Intelligence Simply click our Flight+Hotels/Holiday Sections & Explore',
    img: '/images/blog1.png',
    url: '#',
  },
  {
    id: 2,
    title: 'Get Best Deals to Book the Perfect Event Venue with Us',
    text: 'Planning and searching for the ideal event venue can be nerve-wracking and requires a lot of resources such as your time, money, and effort. LastHour.com enables you to explore a plethora of options to book your event space in just a few clicks at Best Discounted Price',
    img: '/images/blog2.png',
    url: '#',
  },
  {
    id: 3,
    title: 'Holidays are now no more far away and expensive',
    text: 'There is always a better Deal.... Yes, We make Holiday Packages affordable by findling Good & Best Discounted Price. Explore our LastHour Deals for Holidays Packages',
    img: '/images/blog3.png',
    url: '#',
  },
  {
    id: 4,
    title: 'Stuck in less than 24Hour Ticket Cancellation Policy?',
    text: 'Use our Platform to Recover or minimize losses  We made it seamless easy possible using our advanced Web3.0 Platform  Click here to know more details',
    img: '/images/blog4.png',
    url: '#',
  },
];
export const BlogSection = () => (
  <section className='py-7 bg-white'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 gap-10'>
        {BLOG_DATA?.map((data) => (
          <BlogCard key={data?.id} data={data} />
        ))}
      </div>
    </div>
  </section>
);
