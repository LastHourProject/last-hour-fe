const SAVER_FAIR = [
  {
    id: 1,
    title: 'Regular',
  },
  {
    id: 2,
    title: 'Student',
  },
  {
    id: 3,
    title: 'Senior Citizen',
  },
  {
    id: 4,
    title: 'Armed Forces',
  },
  {
    id: 5,
    title: 'Doctor and Nurses',
  },
];

export const SaverFare = ({ onSelectFare }) => {
  const handleFareSelection = (fare) => {
    onSelectFare(fare);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='absolute top-5 bg-white rounded-md shadow-[0_1px_6px_0_rgb(0_0_0_/_20%)] w-60 left-0  z-50 overflow-hidden'
    >
      <div className='content py-2'>
        <h6 className='px-3 font-bold text-slate-gray text-xs uppercase'>
          Saving
        </h6>
        <div className='list mt-3 overflow-auto max-h-[216px]'>
          {SAVER_FAIR?.map((data) => (
            <div
              key={data?.id}
              className='listItem flex justify-between gap-2 hover:bg-[#f2f2f2] px-[10px] py-[5px]'
              onClick={() => handleFareSelection(data)}
            >
              <div>
                <div className='relative'>
                  <h5 className='text-sm text-black mb-1'>{data?.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
