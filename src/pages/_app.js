import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'swiper/css';
import 'swiper/css/navigation';
import store from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={inter.className}>
        <ToastContainer />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
