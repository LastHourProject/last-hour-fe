import {
  Container,
  HeroSection,
  Layout,
  AboutSection,
  HowDoesWorkSection,
  Dashboard,
  BlogSection,
  NewsSection,
  Typography,
  FlexBox,
} from '@/components';
import { BloombergIcon, TechIcon, YahooIcon } from '@/components/icons';

const partners = [
  { name: 'Test Icon', image: '/images/test.png' },
  { name: 'Test Icon', image: '/images/sunries.png' },
  { name: 'Test Icon', image: '/images/delete.png' },
];

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Dashboard />
      <HowDoesWorkSection />
      <AboutSection />
      <BlogSection />
      <NewsSection />

      <div className='w-full bg-white py-5'>
        <Container>
          <FlexBox gap='10' justifyContent='center' className='pt-14 pb-10'>
            <div className='award'>
              <img src='/images/award.png' alt='award' />
            </div>
            <div className='text-center'>
              <Typography
                as='h3'
                fontType='g-black'
                color='primary'
                fontSize='24'
                className='mb-7'
              >
                LastHour.com was featured in:
              </Typography>
              <FlexBox
                gap='8'
                alignItems='center'
                justifyContent='center'
                className='mb-8'
              >
                <YahooIcon className='text-primary' />
                <TechIcon />
                <YahooIcon />
                <YahooIcon />
                <YahooIcon />
                <BloombergIcon />
              </FlexBox>

              <FlexBox
                alignItems='center'
                className='flex-col lg:flex-row gap-10 sm:gap-20'
              >
                <Typography as='h2' fontSize='24' className='whitespace-nowrap'>
                  We Are{' '}
                  <Typography as='span' fontType='g-black' color='primary'>
                    trusted
                  </Typography>{' '}
                  by
                </Typography>

                <FlexBox className='flex-wrap gap-5 sm:gap-20 sm:items-center'>
                  {partners.map((partner, index) => (
                    <FlexBox gap='2' alignItems='center' key={index}>
                      <img src={partner.image} alt={partner.name} />

                      <Typography
                        as='span'
                        fontType='g-bold'
                        fontSize='24'
                        color='blavk'
                        className='whitespace-nowrap'
                      >
                        {partner.name}
                      </Typography>
                    </FlexBox>
                  ))}
                </FlexBox>
              </FlexBox>
            </div>
          </FlexBox>
        </Container>
      </div>
    </Layout>
  );
}
