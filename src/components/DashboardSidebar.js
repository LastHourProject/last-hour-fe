import Link from 'next/link';
import classNames from 'classnames';
import { useState } from 'react';

import {
  ArrowDownIcon,
  CartIcon,
  DashboardIcon,
  ExpandIcon,
  FlightIcon,
  HelpIcon,
  LoginPersonIcon,
  LoyalityIcon,
  ProfileIcon,
  TimeIcon,
  WalletNewIcon,
} from './icons';
import { LoginModal } from './LoginModal';

const SIDE_BAR_LIST = [
  {
    id: 1,
    title: 'My Profile',
    icon: <ProfileIcon />,
    url: '/profile',
  },
  {
    id: 2,
    title: 'Dashboard',
    icon: <DashboardIcon />,
    url: '/',
  },
  {
    id: 3,
    title: 'My Cart',
    icon: <CartIcon />,
    url: '/cart',
  },
  {
    id: 4,
    title: 'Wallet',
    icon: <WalletNewIcon />,
    url: '/wallet',
  },
  {
    id: 5,
    title: 'Flights',
    icon: '/images/bookingLogo.png',
    url: '/wallet',
  },
  {
    id: 6,
    title: 'Loyalty Programs',
    icon: <LoyalityIcon />,
    url: '/loyality',
  },
  {
    id: 7,
    title: 'Help & Support',
    icon: <HelpIcon />,
    url: '/help',
  },
];

export const DashboardSideBar = ({ showSidebar, handleSidebar, isSearch }) => {
  const [showLoginModal, setShowLoginModal] = useState();

  const handleLoginModal = () => setShowLoginModal(!showLoginModal);

  return (
    <>
      <div
        className={classNames(
          'bg-secondary pt-3 pb-10 transition-all duration-[0.5s] ease-in-out',
          {
            'w-[297px]': !showSidebar,
            'w-[123px]': showSidebar,
          },
        )}
      >
        <div className='relative pt-4'>
          {isSearch ? (
            <span
              className={classNames(
                'absolute top-0 right-[10px] cursor-pointer',
                {
                  'rotate-0': showSidebar,
                  'rotate-180': !showSidebar,
                },
              )}
              onClick={handleSidebar}
            >
              <ExpandIcon />
            </span>
          ) : (
            ''
          )}
          <div className='flex items-center justify-center flex-col cursor-pointer'>
            <LoginPersonIcon
              onClick={handleLoginModal}
              className={showSidebar && 'w-[85px] h-[90px]'}
            />
          </div>
          <ul className='pt-10'>
            {SIDE_BAR_LIST?.map((data) => (
              <li className='relative mb-7' key={data?.id}>
                <Link
                  href={data?.url}
                  className={classNames(
                    'text-white font-g-medium text-lg flex items-center px-9',
                    {
                      'flex-col bg-white rounded-l-[100px] py-2 gap-0':
                        data?.title === 'Flights',
                      'gap-5': data?.title !== 'Flights',
                      'justify-center !bg-transparent': showSidebar,
                    },
                  )}
                >
                  {data?.title === 'Flights' ? (
                    showSidebar ? (
                      <TimeIcon />
                    ) : (
                      <img src={data?.icon} alt='icon' />
                    )
                  ) : (
                    data?.icon
                  )}
                  {data?.title === 'Flights' ? (
                    showSidebar ? (
                      ''
                    ) : (
                      <span className='bg-primary py-1 px-3 flex gap-2 items-center rounded-5 ml-auto'>
                        <FlightIcon className='w-7 h-4' />
                        {data?.title}
                        <ArrowDownIcon />
                      </span>
                    )
                  ) : (
                    !showSidebar && data?.title
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showLoginModal && (
        <LoginModal openModal={showLoginModal} closeModal={handleLoginModal} />
      )}
    </>
  );
};
