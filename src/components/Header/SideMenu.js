import { CrossIcon, LinkIcon } from '../icons';

const menuItems = [
  {
    title: 'My Booking',
    link: '/#',
    icon: '',
  },
  {
    title: 'LastHour Deals',
    link: '/#',
    icon: '',
  },
  {
    title: 'My Booking',
    link: '/#',
    icon: '',
  },
  {
    title: 'Help & Support',
    link: '/#',
    icon: <LinkIcon />,
  },
];

let isSidebarOpen = false;

export const SideMenu = ({ onClose, isOpen }) => {
  const handleBodyOverflow = (Open) => {
    if (Open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
    handleBodyOverflow(isSidebarOpen);
  };

  if (isOpen !== isSidebarOpen) {
    toggleSidebar();
  }

  return (
    <>
      {isOpen && (
        <>
          <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50'></div>
          <div className='fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 transition-all duration-1000 delay-[0.3s] ease-in-out sidebar'>
            <CrossIcon
              onClick={() => {
                toggleSidebar();
                onClose();
              }}
              className='cursor-pointer absolute right-3 top-2'
            />

            <div className='p-5 flex flex-col gap-2'>
              {menuItems?.map((item, index) => (
                <ul key={index}>
                  <li className='text-sm font-medium text-black cursor-pointer'>
                    {item.title}
                    {item.icon && (
                      <span className='flex items-center text-sm font-medium text-primary gap-1 mt-2'>
                        {item.icon}
                        {item.title}
                      </span>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
