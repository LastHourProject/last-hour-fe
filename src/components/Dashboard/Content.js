import { Button } from '../Button';
import { ListingCard } from '../ListingCard';
import { LocationCard } from '../LocationCard';
import { SettingBlueIcon } from '../icons/SettingBlueIcon';

const PREFERENCES = [
  {
    id: 1,
    label: 'London - Singapore | Tue-09-Jun-24',
  },
  {
    id: 2,
    label: 'Delhi - Singapore  |  Tue-09-Jun-24',
  },
  {
    id: 3,
    label: 'Delhi - Mumbai  |  Sun-11-Jun-24',
  },
  {
    id: 4,
    label: 'Ahmedabad - Mumbai  |  Sun-11-Jun-24',
  },
];
export const Content = () => (
  <div className='shadow-[0px_0px_30px_0px_#0000004D] px-5 bg-white 1xl:w-[70%] overflow-hidden'>
    <div className='relative'>
      <div className='flex justify-center items-center gap-3 bg-secondary p-2'>
        <p className='text-xl font-g-bold text-white'>
          Set preferences and alerts
        </p>
        <Button className='flex items-center justify-center gap-3 py-1 border-2 border-[#72D6FF] bg-primary rounded-5 w-[180px] text-white uppercase font-g-bold'>
          <SettingBlueIcon /> Click here
        </Button>
      </div>
      <div className='shadow-[0px_0px_30px_0px_#0000004D] p-4 mt-3'>
        <p className='font-g-bold  text-xl text-secondary mb-2'>
          Below Preferences Set by you:
        </p>
        <div className='bg-white shadow-[0px_0px_30px_0px_#0000004D] py-2 px-5'>
          <div className='grid grid-cols-2 gap-2'>
            {PREFERENCES?.map((data) => (
              <div className='relative flex gap-2 items-center' key={data?.id}>
                <input
                  type='radio'
                  id={data?.id}
                  name={data?.id}
                  className='accent-primary'
                />
                <label
                  htmlFor={data?.id}
                  className='font-g-semibold text-secondary text-lg'
                >
                  {data?.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap -mx-4 mt-6 h-full'>
      <div className='pl-4 w-2/5 h-full'>
        <LocationCard />
      </div>
      <div className='flex flex-col gap-4 w-3/5 px-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ListingCard key={index} />
        ))}
      </div>
    </div>
  </div>
);
