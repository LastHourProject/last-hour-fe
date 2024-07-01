import { Typography } from '../Typography';
import { Button } from '../Button';

import { AdultSelect } from './AdultSelect';
import { ChildrenSelect } from './ChildrenSelect';

const ECONOMY_OPTIONS = [
  {
    value: 'economy',
    label: 'Economy',
  },
  {
    value: 'premiumeconomy',
    label: 'Premium Economy',
  },
  {
    value: 'businessclass',
    label: 'Business Class',
  },
  {
    value: 'firstclass',
    label: 'First Class',
  },
];

export const TravelAndCabinSelectDropdown = ({ handleApply }) => (
  <div
    onClick={(e) => e.stopPropagation()}
    className='absolute top-full mt-2 bg-white rounded-md shadow-[0_1px_6px_0_rgb(0_0_0_/_20%)] w-[400px] right-0 min-h-[316px] z-[55555] overflow-hidden'
  >
    <div className='relative p-5'>
      <div className='relative'>
        <div className='relative'>
          <Typography fontType='g-semibold'>Cabin class</Typography>
          <select className='font-g-medium text-secondary w-full border border-secondary mt-2 h-14 rounded-10'>
            <option className='hidden'>Select Class</option>
            {ECONOMY_OPTIONS?.map((data, index) => (
              <option key={index} value={data.value}>
                {data?.label}
              </option>
            ))}
          </select>
        </div>
        <AdultSelect />
        <ChildrenSelect />
        <Typography fontSize='14' fontType='g-regular' className='mt-4'>
          Your age at time of travel must be valid for the age category booked.
          Airlines have restrictions on under 18s travelling alone.
        </Typography>
        <br />
        <Typography fontSize='14' fontType='g-regular'>
          Age limits and policies for travelling with children may vary so
          please check with the airline before booking.
        </Typography>
        <Button
          onClick={handleApply}
          className='w-full bg-primary rounded-5 py-3 border-2 border-[#72D6FF] px-2 text-white font-g-bold text-lg mt-4'
        >
          Apply
        </Button>
      </div>
    </div>
  </div>
);
