const exploreMore = [
  {
    image: '/images/wheretogo.png',
    title: 'Where2Go',
  },
  {
    image: '/images/trip-money.png',
    title: 'Insurance',
    discretion: 'For International Trips',
  },
  {
    image: '/images/tert-flights.avif',
    title: 'Explore International Flights',
    discretion: 'Cheapest Flights to Paris, Bali, Tokyo & more',
  },
  {
    image: '/images/mice- square.png',
    title: 'MICE',
    discretion: 'Offsites, Events & Meetings',
  },
  {
    image: '/images/gift-card.png',
    title: 'Gift Cards',
  },
];

export const Explore = () => (
  <div
    className='flex justify-center'
    style={{
      marginTop: '-30px',
    }}
  >
    <div className='md:w-[70%] lg:w-[68%] max-w-[70%] mx-auto bg-white shadow rounded-lg sm:rounded-[50px] flex flex-col lg:flex-row justify-between'>
      {exploreMore?.map((explore, index, border) => (
        <div
          className={`flex items-center gap-3 lg:border-dim-gray px-5 py-2 ${
            index !== border.length - 1 ? 'lg:border-r' : ''
          }`}
          key={index}
        >
          <img src={explore.image} className='w-7 h-7' />

          <div>
            <h3 className='text-sm text-black'>{explore.title}</h3>
            <p className='text-xs text-gray-500'>{explore.discretion}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
