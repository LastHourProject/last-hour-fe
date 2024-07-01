import { RangeDropdown } from './RangeDropdown';
import { DepartureDropdown } from './DepartureDropdown';
import { LocationDropdown } from './LocationDropdown';
import { AirlineDropdown } from './AirlineDropdown';

export const FilterCard = () => (
  <div className='shadow-[0px_0px_20px_0px_#00000040] min-w-[300px] ml-5'>
    <div className='filters p-4'>
      <RangeDropdown />
      <DepartureDropdown />
      <LocationDropdown />
      <AirlineDropdown />
    </div>
  </div>
);
