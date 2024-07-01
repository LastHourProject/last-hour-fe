import { Typography } from './Typography';

const firstCss =
  'bg-white  after:absolute after:bg-white after:right-0 after:top-0 after:rounded-r-xl after:w-1/2 after:h-full  relative before:absolute before:w-1/2 before:bg-secondary before:h-[106%] before:-left-[6px] before:-top-[5px] before:rounded-l-[20px] before:z-50 p-2.5 rounded-xl border-[3px] border-primary';
const iconCss =
  'absolute left-1/2 -translate-x-1/2 -top-12 bg-white shadow-[0px_0px_5px_0px_#0000001A_inset] border-2 border-[#D9D9D94D] w-[83px] h-[83px] flex rounded-full items-center justify-center';
const cardCss =
  'card z-50 relative pt-10 px-3 pb-5 bg-white rounded-xl shadow-[0px_0px_10px_0px_#00000080]';
export const WorkCard = ({ data }) => (
  <div className={firstCss}>
    <div className='absolute bg-white border-[6px] border-primary w-[100px] h-[100px] rounded-full -top-12 left-1/2 -translate-x-1/2'></div>
    <div className={cardCss}>
      <span className={iconCss}>{data?.icon}</span>
      <Typography color='black' fontSize='16' className='text-center'>
        {data?.text}
      </Typography>
    </div>
  </div>
);
