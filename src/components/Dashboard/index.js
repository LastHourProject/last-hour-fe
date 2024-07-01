import { useState } from 'react';
import classNames from 'classnames';

import { DashboardSideBar } from '../DashboardSidebar';
import { ViewCard } from '../ViewCard';

import { Content } from './Content';

const VIEW_LISTING = [
  {
    id: 1,
    title: 'Explore International Flight',
    text: 'Tenerife, Canary Islands',
    buttonText: 'Click Here',
    url: '#',
    img: '/images/location.png',
  },
  {
    id: 2,
    title: 'Where to go',
    text: 'Tenerife, Canary Islands',
    buttonText: 'From $130',
    url: '#',
  },
  {
    id: 3,
    title: 'Where to go',
    text: 'Algarve, Portugal',
    buttonText: 'From $130',
    url: '#',
    img: '/images/location.png',
  },
];

export const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState();

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='dashboard relative'>
      <div className='flex flex-wrap'>
        <DashboardSideBar
          handleSidebar={handleSidebar}
          showSidebar={showSidebar}
        />

        <div
          className={classNames('transition-all duration-[0.5s] ease-in-out', {
            'w-[calc(100%-123px)]': showSidebar,
            'w-[calc(100%-297px)]': !showSidebar,
          })}
        >
          <div className='flex flex-wrap 2xl:w-full'>
            <Content />
            <div className='relative flex pl-5 pt-5 1xl:pl-0 1xl:pt-0 1xl:w-[30%] flex-col gap-8'>
              {VIEW_LISTING?.map((data) => (
                <ViewCard key={data?.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
