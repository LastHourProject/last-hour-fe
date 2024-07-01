import classNames from 'classnames';

const modalBackdrop =
  'bg-black fixed inset-0 z-[555555] overflow-hidden h-full opacity-50 block transition-opacity duration-150 ease-linear';
const modal =
  'transition-all min-h-max max-h-max m-auto rounded-5 duration-700  delay-[0.3s] ease-in-out ease-in-out  mx-auto fixed inset-0 z-[555555] overflow-auto outline-0 text-center box-border bg-white sm:bg-white max-w-[32rem]';
export const Modal = ({ openModal, closeModal, children }) => (
  <div
    className='fixed inset-0 overflow-x-hidden overflow-y-auto z-[555555] flex p-6'
    onClick={closeModal}
  >
    {openModal ? (
      <div
        onClick={closeModal}
        className={classNames(modalBackdrop, {
          'block opacity-50 modalShow': openModal,
          'hidden opacity-0': !openModal,
        })}
      ></div>
    ) : (
      ''
    )}
    <div
      className={classNames(modal, {
        'translate-y-0 openModal': openModal,
        'translate-y-1/2': !openModal,
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <div className='relative'>{children}</div>
    </div>
  </div>
);
