import { toast } from 'react-toastify';

import { CrossIcon } from '@/components/icons';

import 'react-toastify/dist/ReactToastify.css';

const options = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  pauseOnHover: true,
};

export const toaster = {
  success(msg) {
    return toast.success(msg, {
      ...options,
      className: 'toast-success-container toast-success-container-after',
    });
  },
  error(msg) {
    return toast.error(msg, {
      ...options,
      className: 'toast-error-container toast-error-container-after',
      icon: () => <CrossIcon />,
    });
  },
  info(msg) {
    return toast.info(msg, {
      ...options,
      className: 'toast-info-container toast-info-container-after',
    });
  },
};
