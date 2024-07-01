import DatePicker from 'react-datepicker';

export const CustomDatePicker = ({
  startDate,
  endDate,
  selectedDates,
  onChange,
  selectsRange,
  closeModal,
  ...rest
}) => (
  <div className='border border-black bg-white rounded-md'>
    <DatePicker
      startDate={startDate}
      selectedDates={selectedDates}
      endDate={endDate}
      onChange={onChange}
      monthsShown={2}
      inline
      selectsRange={selectsRange}
      useWeekdaysShort={true}
      {...rest}
    />
    <div className='flex justify-end gap-3 p-5'>
      <button
        onClick={closeModal}
        type='button'
        className='bg-water-sky text-black rounded-[5px] w-24 h-10 text-sm font-semibold'
      >
        Cancel
      </button>
      <button
        onClick={closeModal}
        type='button'
        className='bg-primary text-white rounded-[5px] w-24 h-10 text-sm font-semibold'
      >
        Set Dates
      </button>
    </div>
  </div>
);
