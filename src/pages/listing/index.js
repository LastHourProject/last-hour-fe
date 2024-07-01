import { HeroSection, Layout, SearchDashboard } from '@/components';

export default function Listing() {
  return (
    <Layout>
      <HeroSection className='!sticky top-[132px] z-50' isSearch />
      <div className='py-5'>
        <SearchDashboard />
      </div>
    </Layout>
  );
}
