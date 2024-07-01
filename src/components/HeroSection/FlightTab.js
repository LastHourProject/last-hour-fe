/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import moment from 'moment';

import { ArrowDownIcon, MessageIcon, TransferIcon } from '../icons';
import { CityDropdown } from '../CityDropdown';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { FlexBox } from '../FlexBox';
import { TravelAndCabinSelectDropdown } from '../TravelAndCabinSelectDropdown';

import { CustomDatePicker } from './CustomDatePicker';

const tripOptions = [
  { id: 'oneway', label: 'One Way' },
  { id: 'round', label: 'Return' },
  { id: 'multi', label: 'Multi City' },
];

export const FlightTab = ({ isSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showCityDropdownTwo, setShowCityDropdownTwo] = useState(false);
  const [showCityDropdownThree, setShowCityDropdownThree] = useState(false);
  const [tripType, setTripType] = useState('oneway');
  const [endDate, setEndDate] = useState('');
  const [singleDate, setSingleDate] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedToCity, setSelectedToCity] = useState(null);
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [showCabinDropdown, setCabinDropdown] = useState(false);
  const [showLiveDateUI, setShowLiveDateUI] = useState(false);
  const [currentDate, setCurrentDate] = useState(moment());
  const [multiCity, setMultiCity] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCabinDropdown = () => {
    setCabinDropdown(!showCabinDropdown);
  };

  const handleLastHourBookingChange = () => {
    setShowLiveDateUI(!showLiveDateUI);
  };

  const handleTripChange = (e) => {
    setTripType(e.target.value);

    if (e.target.value === 'oneway') {
      setEndDate('');
      setSingleDate(true);
      setMultiCity(false);
    }

    if (e.target.value === 'round') {
      setMultiCity(false);
    }

    if (e.target.value === 'multi') {
      setMultiCity(true);
    }
  };

  const handleDepartureClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleSelectCity = () => {
    setShowCityDropdown(!showCityDropdown);
    setShowCityDropdownTwo(false);
  };

  const handleSelectCityTwo = () => {
    setShowCityDropdownTwo(!showCityDropdownTwo);
    setShowCityDropdown(false);
  };

  const handleSelectCityThree = () => {
    setShowCityDropdownThree(!showCityDropdownThree);
    setShowCityDropdown(false);
    setShowCityDropdownTwo(false);
  };

  const handleDateChange = (dates) => {
    if (singleDate) {
      setStartDate(dates);

      return;
    }

    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleFromCLick = (city) => {
    setSelectedCity(city);
    setShowCityDropdown(false);
  };

  const handleToCLick = (city) => {
    setSelectedToCity(city);
    setShowCityDropdownTwo(false);
  };

  const handleSelectAirline = (city) => {
    setSelectedAirline(city);
    setShowCityDropdownThree(false);
  };

  const handleOutsideCloseModal = () => {
    setShowDatePicker(false);
    setShowCityDropdown(false);
    setShowCityDropdownThree(false);
    setShowCityDropdownTwo(false);
    setSelectedCity(false);
  };

  return (
    <>
      <div className='relative pt-12'>
        {!isSearch && (
          <div className='searchTab pl-[200px]'>
            <FlexBox
              justifyContent='between'
              alignItems='end'
              gap='4'
              className='tabList'
            >
              <div className='relative'>
                <div className='booking'>
                  <FlexBox gap='2' alignItems='center'>
                    <input
                      type='checkbox'
                      id='book'
                      name='book'
                      onChange={handleLastHourBookingChange}
                    />
                    <label
                      htmlFor='book'
                      className='text-white font-g-medium text-lg'
                    >
                      Last Hour Booking
                    </label>
                    <div className='toolTip text-white'>
                      <MessageIcon />
                      <span className='toolTipText'>Lorem Ipsum</span>
                    </div>
                  </FlexBox>
                </div>
                <div className='flex gap-2 mt-5'>
                  {tripOptions.map((option, index) => (
                    <FlexBox gap='2' alignItems='center' key={index}>
                      <input
                        type='radio'
                        id={option.id}
                        name='tripType'
                        value={option.id}
                        checked={tripType === option.id}
                        onChange={handleTripChange}
                        className='accent-primary'
                      />
                      <label
                        className='text-white font-g-medium'
                        htmlFor={option.id}
                      >
                        {option.label}
                      </label>
                    </FlexBox>
                  ))}
                </div>
              </div>
              <FlexBox alignItems='center' gap='5' className='relative'>
                <FlexBox
                  alignItems='center'
                  justifyContent='center'
                  className='selectAirlines relative bg-white h-[50px] px-5'
                  onClick={handleSelectCityThree}
                >
                  <span className='border-0 focus:border-0 outline-0'>
                    {selectedAirline
                      ? selectedAirline?.title
                      : 'Select Airlines (Optional)'}
                  </span>
                  <ArrowDownIcon className='text-xl' />
                  {showCityDropdownThree && (
                    <CityDropdown handleClick={handleSelectAirline} />
                  )}
                </FlexBox>
                <div className='booking'>
                  <FlexBox gap='2' alignItems='center'>
                    <input type='checkbox' id='ready' name='ready' />
                    <label htmlFor='ready' className='text-white font-g-medium'>
                      Ready for Booking:
                    </label>
                    <div className='toolTip text-white'>
                      <MessageIcon />
                      <span className='toolTipText'>Lorem Ipsum</span>
                    </div>
                  </FlexBox>
                </div>
              </FlexBox>
            </FlexBox>
          </div>
        )}
        <div className={classNames('relative', { 'mt-4': !isSearch })}>
          <div className='relative'>
            <FlexBox
              justifyContent='between'
              direction={multiCity ? 'column' : 'row'}
              className={classNames({ 'gap-2': isSearch, 'gap-10': !isSearch })}
            >
              <div
                className={classNames(
                  'text-center sm:text-left grid gap-2 cursor-pointer h-[98px]',
                  {
                    'grid-cols-5': !isSearch,
                    'grid-cols-6': isSearch,
                    'grid-cols-4': multiCity,
                    '!grid-cols-4': showLiveDateUI,
                  },
                )}
              >
                {isSearch && (
                  <div className='relative p-4 w-full bg-white rounded-l-[10px] h-[84px]'>
                    <div className='booking'>
                      <FlexBox alignItems='center' gap='2'>
                        <input type='checkbox' id='book' name='book' />
                        <label
                          htmlFor='book'
                          className='text-secondary font-g-medium text-lg'
                        >
                          Last Hour Booking
                        </label>
                      </FlexBox>
                    </div>
                    <FlexBox className='flex-wrap'>
                      {tripOptions.map((option, index) => (
                        <FlexBox
                          gap='2'
                          alignItems='center'
                          className='pr-2'
                          key={index}
                        >
                          <input
                            type='radio'
                            id={option.id}
                            name='tripType'
                            value={option.id}
                            checked={tripType === option.id}
                            onChange={handleTripChange}
                            className='accent-primary'
                          />
                          <label
                            className='text-black font-g-medium'
                            htmlFor={option.id}
                          >
                            {option.label}
                          </label>
                        </FlexBox>
                      ))}
                    </FlexBox>
                  </div>
                )}
                <div
                  className='relative p-4 w-full bg-white rounded-l-[10px]'
                  onClick={handleSelectCity}
                >
                  <Typography
                    as='span'
                    fontSize='18'
                    color='secondary-second'
                    fontType='g-medium'
                    className='mb-1'
                  >
                    From
                  </Typography>
                  <Typography color='black' fontSize='16' className='truncate'>
                    {selectedCity
                      ? selectedCity?.text
                      : 'DEL, Delhi Airport India'}
                  </Typography>
                  {showCityDropdown && (
                    <CityDropdown handleClick={handleFromCLick} />
                  )}
                </div>

                <div
                  className='relative p-4 w-full bg-white -mt-5 sm:mt-0'
                  onClick={handleSelectCityTwo}
                >
                  <div className='absolute -left-1 top-1/2 -translate-y-1/2 m-auto -mt-5 sm:mt-auto sm:-ml-5'>
                    <span className='bg-white w-[40px] h-[40px] border border-secondary rounded-full inline-flex items-center justify-center'>
                      <TransferIcon />
                    </span>
                  </div>
                  <Typography
                    as='span'
                    fontSize='18'
                    color='secondary-second'
                    fontType='g-medium'
                    className='mb-1'
                  >
                    To
                  </Typography>

                  <Typography color='black' fontSize='16' className='truncate'>
                    {selectedToCity
                      ? selectedToCity?.text
                      : 'BLR, Bengaluru International Airport India'}
                  </Typography>
                  {showCityDropdownTwo && (
                    <CityDropdown handleClick={handleToCLick} />
                  )}
                </div>

                {showLiveDateUI ? (
                  <div className='flex items-center gap-1 bg-white py-2 px-2 overflow-auto '>
                    {[...Array(7)].map((_, index) => (
                      <div
                        key={index}
                        className='text-center border border-[#161851] min-w-[100px] rounded-[10px] px-[6px] py-[2px]'
                      >
                        <div className='font-g-bold font-normal text-xl'>
                          {currentDate.clone().add(index, 'days').format('ddd')}
                        </div>
                        <div className='font-g-medium font-normal text-base'>
                          {currentDate
                            .clone()
                            .add(index, 'days')
                            .format('DD-MMMM')}
                        </div>
                        <div className='font-g-medium font-normal text-base'>
                          {currentDate
                            .clone()
                            .add(index, 'days')
                            .format('YYYY')}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div
                      className='relative p-4 w-full bg-white'
                      onClick={handleDepartureClick}
                    >
                      <Typography
                        as='span'
                        color='secondary-second'
                        fontSize='18'
                        fontType='g-medium'
                        className='mb-1'
                      >
                        Depart
                      </Typography>
                      <p className='text-black text-base font-g-medium truncate font-bold'>
                        {dayjs(startDate).format('MMM-DD-YYYY')}
                      </p>
                    </div>

                    {!multiCity ? (
                      <div
                        className={classNames('relative p-4 w-full bg-white', {
                          'bg-gray-300 cursor-default': tripType === 'oneway',
                        })}
                        onClick={() => {
                          if (tripType === 'oneway') {
                            setTripType('round');
                          }

                          handleDepartureClick();
                          setSingleDate(false);
                        }}
                      >
                        <Typography
                          as='span'
                          color='secondary-second'
                          fontSize='18'
                          fontType='g-medium'
                          className='mb-1'
                        >
                          Return
                        </Typography>

                        {!singleDate ? (
                          <Typography color='black' fontSize='16'>
                            {dayjs(endDate).format('MMM-DD-YYYY')}
                          </Typography>
                        ) : (
                          <Typography color='black' fontSize='16'>
                            Tap to add a return
                          </Typography>
                        )}
                      </div>
                    ) : (
                      ''
                    )}
                  </>
                )}

                <div
                  className='relative p-4 w-full bg-white'
                  onClick={handleCabinDropdown}
                >
                  <Typography
                    as='span'
                    color='secondary-second'
                    fontSize='18'
                    fontType='g-medium'
                    className='mb-1 truncate'
                  >
                    Travelers and cabin class
                  </Typography>
                  <Typography color='black' fontSize='16'>
                    1 Adult, Economy
                  </Typography>
                  {showCabinDropdown && (
                    <TravelAndCabinSelectDropdown
                      handleApply={() => setCabinDropdown(false)}
                    />
                  )}
                </div>
              </div>
              {multiCity && (
                <div className='flex justify-between w-[86%] items-center gap-2'>
                  <div
                    className='relative p-4 w-full bg-white rounded-l-[10px]'
                    onClick={handleSelectCity}
                  >
                    <Typography
                      as='span'
                      fontSize='18'
                      color='secondary-second'
                      fontType='g-medium'
                      className='mb-1'
                    >
                      From
                    </Typography>
                    <Typography
                      color='black'
                      fontSize='16'
                      className='truncate'
                    >
                      {selectedCity
                        ? selectedCity?.text
                        : 'DEL, Delhi Airport India'}
                    </Typography>
                    {showCityDropdown && (
                      <CityDropdown handleClick={handleFromCLick} />
                    )}
                  </div>

                  <div
                    className='relative p-4 w-full bg-white -mt-5 sm:mt-0'
                    onClick={handleSelectCityTwo}
                  >
                    <div className='absolute -left-1 top-1/2 -translate-y-1/2 m-auto -mt-5 sm:mt-auto sm:-ml-5'>
                      <span className='bg-white w-[40px] h-[40px] border border-secondary rounded-full inline-flex items-center justify-center'>
                        <TransferIcon />
                      </span>
                    </div>
                    <Typography
                      as='span'
                      fontSize='18'
                      color='secondary-second'
                      fontType='g-medium'
                      className='mb-1'
                    >
                      To
                    </Typography>

                    <Typography
                      color='black'
                      fontSize='16'
                      className='truncate'
                    >
                      {selectedToCity
                        ? selectedToCity?.text
                        : 'BLR, Bengaluru International Airport India'}
                    </Typography>
                    {showCityDropdownTwo && (
                      <CityDropdown handleClick={handleToCLick} />
                    )}
                  </div>
                  <div
                    className={classNames('relative p-4 w-full bg-white', {
                      'bg-gray-300 cursor-default': tripType === 'oneway',
                    })}
                    onClick={() => {
                      if (tripType === 'oneway') {
                        setTripType('round');
                      }

                      handleDepartureClick();
                      setSingleDate(false);
                    }}
                  >
                    <Typography
                      as='span'
                      color='secondary-second'
                      fontSize='18'
                      fontType='g-medium'
                      className='mb-1'
                    >
                      Return
                    </Typography>

                    {!singleDate ? (
                      <Typography color='black' fontSize='16'>
                        {dayjs(endDate).format('MMM-DD-YYYY')}
                      </Typography>
                    ) : (
                      <Typography color='black' fontSize='16'>
                        Tap to add a return
                      </Typography>
                    )}
                  </div>
                  <div className='relative p-4 w-full bg-white flex justify-center items-center h-[84px]'>
                    <Button className=' font-g-medium text-white text-sm bg-primary h-[40px] px-4 w-[90%]'>
                      ADD ANOTHER CITY
                    </Button>
                  </div>
                </div>
              )}
              <Button
                className={`h-[84px] font-g-bold text-white text-3xl shadow-[0px_0px_10px_0px_#00000040_inset] bg-primary  border-2 border-[#72D6FF] rounded-10 ${multiCity ? 'absolute right-1 top-[40%] w-[180px] ' : 'w-[255px]'} `}
              >
                Search
              </Button>
            </FlexBox>
          </div>

          {showDatePicker && (
            <div
              className='absolute top-[110%] left-1/2 -translate-x-1/2 z-[55555]'
              onClick={(e) => e.stopPropagation()}
            >
              <CustomDatePicker
                startDate={startDate}
                selectedDates={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                monthsShown={2}
                inline
                selectsRange={!singleDate}
                useWeekdaysShort={true}
                closeModal={() => setShowDatePicker(false)}
              />
            </div>
          )}
        </div>
      </div>
      {showDatePicker ||
        showCityDropdown ||
        (showCityDropdownTwo && (
          <div
            className='overlay fixed bg-transparent inset-0 z-50'
            onClick={handleOutsideCloseModal}
          ></div>
        ))}
    </>
  );
};
