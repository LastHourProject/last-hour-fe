import { useState } from 'react';
import classNames from 'classnames';

import { BottomArrowIcon, Search } from '../icons';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { FlexBox } from '../FlexBox';

import { Header } from './Header';
import { FlightTab } from './FlightTab';

export const HeroSection = ({ isSearch, className }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleShowSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      <div className={classNames('relative', className)}>
        {showSearchBar ? (
          <div
            className={classNames('bg-blue-gradient px-[50px]', {
              'pb-4 pt-4': !showSearchBar,
              'pb-24 pt-16': showSearchBar,
            })}
          >
            {isSearch ? (
              <div className='text-center'>
                <div className='relative bg-white inline-flex items-center mx-auto rounded-10 py-3 px-8 gap-8'>
                  <div className='relative'>
                    <Typography color='secondary' fontSize='16'>
                      New Delhi - Bangalore | 13 - 14 Jun | 1 Passenger
                    </Typography>
                  </div>
                  <Button
                    onClick={handleShowSearch}
                    className='flex items-center bg-primary text-white py-2 px-3 gap-4 rounded-sm'
                  >
                    <Search />{' '}
                    <Typography color='white' fontSize='20' fontType='g-bold'>
                      Modify
                    </Typography>
                  </Button>
                </div>
              </div>
            ) : (
              <Header />
            )}
            <div
              className={classNames('transition ease-in-out duration-[0.3s]', {
                'h-full opacity-1 visible': showSearchBar,
                'h-0 opacity-0 invisible': !showSearchBar,
              })}
            >
              <FlightTab isSearch={isSearch} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {!isSearch && (
          <FlexBox
            gap='2'
            justifyContent='center'
            alignItems='center'
            onClick={handleShowSearch}
            className='mb-10 bg-[url(/images/showBg.svg)] bg-no-repeat bg-cover cursor-pointer mx-auto text-base font-regular font-g-bold text-white h-[34px] w-[373px] uppercase'
          >
            <BottomArrowIcon
              className={classNames({ 'rotate-180': showSearchBar })}
            />
            {showSearchBar ? 'Hide search panel' : 'Show search panel'}
            <BottomArrowIcon
              className={classNames({ 'rotate-180': showSearchBar })}
            />
          </FlexBox>
        )}
      </div>
    </>
  );
};
