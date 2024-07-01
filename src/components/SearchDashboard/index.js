import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useState } from 'react';
import classNames from 'classnames';

import { DashboardSideBar } from '../DashboardSidebar';
import { ListingCard } from '../ListingCard';
import { LocationCard } from '../LocationCard';
import { Typography } from '../Typography';
import { FilterCard } from '../FilterCard';

export const SearchDashboard = () => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [showSidebar, setShowSidebar] = useState();

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='dashboard relative'>
      <div className='flex flex-wrap'>
        <DashboardSideBar
          isSearch
          handleSidebar={handleSidebar}
          showSidebar={showSidebar}
        />

        <div
          className={classNames('transition-all duration-[0.5s] ease-in-out', {
            'w-[calc(100%-123px)]': showSidebar,
            'w-[calc(100%-297px)]': !showSidebar,
          })}
        >
          <div className='flex 2xl:w-full gap-4 h-full'>
            <FilterCard />
            <div className='relative pr-12 overflow-hidden shadow-[0px_0px_50px_0px_#00000040]'>
              <div className='relative'>
                <div className='overflow-hidden bg-white shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                  <Swiper
                    slidesPerView={5}
                    navigation
                    modules={[Navigation]}
                    className='slotSlider pr-20 bg-white'
                  >
                    {Array.from({ length: 8 }).map((_, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={classNames(
                            'relative cursor-pointer text-center border-r border-r-[#CDCDCD] my-[10px]',
                            {
                              'before:absolute before:border-b before:border-primary before:w-full before:-bottom-[10px] before:left-0':
                                selectedSlot === index,
                            },
                          )}
                          onClick={() => setSelectedSlot(index)}
                        >
                          <Typography
                            color={
                              selectedSlot === index ? 'primary' : 'secondary'
                            }
                          >
                            Thu, 9 may
                          </Typography>
                          <Typography fontSize='14' fontType='g-regular'>
                            ر./651
                          </Typography>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className='relative pt-3 pl-3'>
                  <div className='flex items-center justify-between bg-secondary px-3 py-4 rounded-t-10'>
                    <Typography as='h4' color='white' fontSize='18'>
                      Departing to Bangalore
                    </Typography>
                    <Typography
                      fontType='g-semibold'
                      color='white'
                      className='uppercase'
                    >
                      *Last updated: 16:10:06, June 12, 2024
                    </Typography>
                  </div>
                  <div className='flex gap-3 pt-3'>
                    <div className='w-[45%]'>
                      <LocationCard />
                    </div>
                    <div className='relative flex w-[65%] flex-col gap-4'>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <ListingCard key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
