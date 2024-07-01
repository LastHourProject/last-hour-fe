import {
  AndroidIcon,
  EventIcon,
  FacebookIcon,
  FlightIcon,
  HotelIcon,
  InstagramIcon,
  IphoneIcon,
  LinkedInIcon,
  PackageIcon,
  TicketIcon,
  YouTubeIcon,
} from '@/components/icons';

export const categoryTabList = [
  {
    id: 0,
    label: 'Flights',
    icon: <FlightIcon />,
    url: '/',
  },
  {
    id: 1,
    label: 'Hotels/ Accomodations',
    icon: <HotelIcon />,
    url: '/hotels',
  },
  {
    id: 2,
    label: 'Flights+Hotels Holiday Packages',
    icon: <PackageIcon />,
    url: '/packages',
  },
  {
    id: 3,
    label: 'Book Event Venues',
    icon: <EventIcon />,
    url: '/events',
  },
  {
    id: 4,
    label: 'Sell Your Itinerary/Ticket',
    icon: <TicketIcon />,
    message: 'Lorem Ipsum',
    url: '/sell-tickets',
  },
];

export const searchTabList = [
  {
    id: 0,
    label: 'Last Hour Booking',
  },
  {
    id: 1,
    label: 'Normal Booking',
  },
];

export const randomMap =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434732.92924588826!2d77.00475355!3d31.651615249999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e238c88ea491%3A0x1b27af4f9de9d23c!2sMandi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1716806592638!5m2!1sen!2sin';

export const FOOTER_LINKS = [
  {
    id: 1,
    title: 'About us',
    list: [
      {
        id: 1,
        title: 'Who we are',
        url: '#',
      },
      {
        id: 2,
        title: 'General Conditions',
        url: '#',
      },
      {
        id: 3,
        title: 'Press Office',
        url: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Partners',
    list: [
      {
        id: 1,
        title: 'Affiliates',
        url: '#',
      },
      {
        id: 2,
        title: 'Become Partners with us',
        url: '#',
      },
      {
        id: 3,
        title: 'Advertise with Us',
        url: '#',
      },
      {
        id: 4,
        title: 'Promotional Partnerships',
        url: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Policies',
    list: [
      {
        id: 1,
        title: 'Data Licenses',
        url: '#',
      },
      {
        id: 2,
        title: 'Privacy Policy',
        url: '#',
      },
      {
        id: 3,
        title: 'Cookie Policy',
        url: '#',
      },
      {
        id: 4,
        title: 'Manage Cookies',
        url: '#',
      },
    ],
  },
  {
    id: 4,
    title: 'Help & Support',
    list: [
      {
        id: 1,
        title: 'Need Help',
        url: '#',
      },
      {
        id: 2,
        title: 'Contact Us',
        url: '#',
      },
      {
        id: 3,
        title: 'Refund Procedure',
        url: '#',
      },
    ],
  },
  {
    id: 5,
    title: 'Features',
    list: [
      {
        id: 1,
        title: 'Sign in / Register',
        url: '#',
      },
      {
        id: 2,
        title: 'Mobile app',
        url: '#',
      },
      {
        id: 3,
        title: 'Site Map',
        url: '#',
      },
    ],
  },
];
export const SOCIAL_ICONS = [
  {
    icon: <FacebookIcon />,
  },
  {
    icon: <InstagramIcon />,
  },
  {
    icon: <YouTubeIcon />,
  },
  {
    icon: <LinkedInIcon />,
  },
];

export const MOBILE_ICONS = [
  {
    icon: <IphoneIcon />,
  },
  {
    icon: <AndroidIcon />,
  },
];

export const CITY_LIST = [
  {
    id: 1,
    title: 'Mumbai, India',
    text: 'Chhatrapati Shivaji International Airport',
    tag: 'BOM',
  },
  {
    id: 2,
    title: 'New Delhi, India',
    text: 'Indra Gandhi International Airport',
    tag: 'DEL',
  },
  {
    id: 3,
    title: 'Amritsar, Punjab',
    text: 'Shri Guru Ram Dass Jee International Airport',
    tag: 'ATQ',
  },
  {
    id: 4,
    title: 'Mumbai, India',
    text: 'Chhatrapati Shivaji International Airport',
    tag: 'BOM',
  },
  {
    id: 5,
    title: 'New Delhi, India',
    text: 'Indra Gandhi International Airport',
    tag: 'DEL',
  },
  {
    id: 6,
    title: 'Amritsar, Punjab',
    text: 'Shri Guru Ram Dass Jee International Airport',
    tag: 'ATQ',
  },
];
