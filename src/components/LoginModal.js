import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import OTPInput from 'react-otp-input';

import { isValidEmail } from '../../helpers/common';
import API from '../../config/API';
import { LOCALSTORAGE_AUTH_KEY } from '../../config';
import { toaster } from '../../helpers/toaster';

import { Button } from './Button';
import { FlexBox } from './FlexBox';
import { Modal } from './Modal';
import { Typography } from './Typography';
import {
  ArrowDownIcon,
  CrossIcon,
  GoogleIcon,
  IphoneIcon,
  LastHourLogo,
} from './icons';
import Input from './Input';

import { setUserDetails } from '@/redux/reducer/users';

export const LoginModal = ({ openModal, closeModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    register: emailRegister,
    handleSubmit: handleEmailRegister,
    reset: registerReset,
    formState: { errors: registerError },
  } = useForm();

  const {
    register: forgotRegister,
    handleSubmit: handleForgotOTP,
    reset: OTPReset,
    formState: { errors: errorsOTP },
  } = useForm();

  const {
    register: changeRegister,
    handleSubmit: handleChangeResetPassword,
    reset: resetPassword,
    setValue,
    formState: { errors: errorsResetPassword },
    watch,
  } = useForm();

  const [showEmail, setShowEmail] = useState();
  const [userEmail, setUserEmail] = useState('');

  const handleShowEmail = (type) => {
    setShowEmail(type);
  };

  const handleLogin = async (values) => {
    try {
      const { data } = await API.post('/auth/login', values);
      localStorage.setItem(LOCALSTORAGE_AUTH_KEY, data?.token);

      dispatch(setUserDetails(data?.data?.user));
      toaster.success('Login successFull');
      reset();
      closeModal();
    } catch (error) {
      console.error('Login Failed', error);
      toaster.error('Login failed. Please check your credentials.');
    }
  };

  const handleRegister = async (values) => {
    try {
      const { data } = await API.post('/auth/register', values);
      localStorage.setItem(LOCALSTORAGE_AUTH_KEY, data?.data?.token);

      dispatch(setUserDetails(data?.data?.user));
      toaster.success('Register successFull');
      registerReset();
      closeModal();
    } catch (error) {
      console.error('Register Failed', error);
      toaster.error('Register failed. Please check your credentials.');
    }
  };

  const handleForgetPassword = async (values) => {
    try {
      const { status } = await API.post('/auth/send-password-reset', values);
      setUserEmail(values.email);
      reset();
      toaster.success('Send Email OTP');
      OTPReset();

      if (status === 200) {
        handleShowEmail('mailOTP');
      }
    } catch (error) {
      console.error('Send failed to OTP', error);
      toaster.error('Login failed. Please check your credentials.');
    }
  };

  const handleConfirmPassword = async (values) => {
    try {
      await API.post('/auth/reset-password', { ...values, email: userEmail });
      toaster.success('Send Email code');
      resetPassword();
    } catch (error) {
      console.error('Login Failed', error);
      toaster.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <Modal openModal={openModal} closeModal={closeModal}>
      <div className='p-5 text-left'>
        {showEmail === 'email' ? (
          <div className='relative'>
            <ArrowDownIcon
              onClick={() => handleShowEmail('')}
              className='rotate-90 w-6 h-6 cursor-pointer'
            />
            <Typography as='h3' fontSize='24' className='mt-4 mb-2'>
              What’s your email address?
            </Typography>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className='relative mb-4'>
                <Input
                  label='Email'
                  type='email'
                  register={register}
                  placeholder='Email Address'
                  name='email'
                  validationRules={{
                    required: 'Enter email address',
                    validate: {
                      isValidEmail: (value) =>
                        isValidEmail(value) || 'Invalid email address',
                    },
                  }}
                  error={errors?.email && errors.email?.message}
                />
              </div>
              <div className='relative mb-4'>
                <Input
                  type='password'
                  label='Password'
                  register={register}
                  placeholder='Password'
                  name='password'
                  validationRules={{
                    required: 'This field is required',
                  }}
                  error={errors?.password && errors.password?.message}
                />
              </div>
              <div
                className='flex justify-end w-full mb-3'
                onClick={() => handleShowEmail('forget')}
              >
                <Typography
                  as='h5'
                  fontSize='14'
                  className='text-primary cursor-pointer'
                >
                  Forget password
                </Typography>
              </div>
              <Button
                type='submit'
                className='bg-secondary py-4 rounded-5 font-g-bold w-full text-white'
              >
                Login
              </Button>
            </form>
          </div>
        ) : showEmail === 'register2' ? (
          <div className='relative'>
            <CrossIcon
              className='ml-auto cursor-pointer'
              onClick={closeModal}
            />
            <LastHourLogo width='250' />
            <Typography as='h3' fontSize='24' className='mt-4 mb-2'>
              Get the full experience
            </Typography>
            <Typography className='mb-4'>
              Track prices, make trip planning easier and enjoy faster booking.
            </Typography>
            <FlexBox direction='column' gap='4'>
              <Button className='bg-black text-white w-full py-4 rounded-5 flex items-center justify-center gap-2 font-g-bold'>
                <IphoneIcon /> Register with Apple
              </Button>
              <Button className='bg-silver text-black w-full py-4 rounded-5 flex items-center justify-center gap-2 font-g-bold'>
                <GoogleIcon width='18' height='18' /> Register with Google
              </Button>
              <Button
                onClick={() => handleShowEmail('register')}
                className='bg-silver text-black w-full py-4 rounded-5 flex items-center justify-center gap-2 font-g-bold'
              >
                Register with Email
              </Button>
            </FlexBox>
            <div className='flex items-center justify-between'>
              <FlexBox gap='2' alignItems='center' className='my-5'>
                <input type='checkbox' id='remember' />
                <Typography as='label' fontType='g-medium'>
                  Remember me
                </Typography>
              </FlexBox>
              <div onClick={() => handleShowEmail('register')}>
                <Typography
                  as='h5'
                  fontSize='14'
                  className='text-primary cursor-pointer'
                >
                  Register
                </Typography>
              </div>
            </div>
            <Typography fontType='g-regular'>
              By continuing you agree to our{' '}
              <Link href='#' className='text-primary'>
                {' '}
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href='#' className='text-primary'>
                Privacy Policy
              </Link>
              .
            </Typography>
          </div>
        ) : showEmail === 'register' ? (
          <div className='relative'>
            <ArrowDownIcon
              onClick={() => handleShowEmail('')}
              className='rotate-90 w-6 h-6 cursor-pointer'
            />
            <Typography as='h3' fontSize='24' className='mt-4 mb-2'>
              What’s your email address?
            </Typography>
            <form onSubmit={handleEmailRegister(handleRegister)}>
              <div className='relative mb-4'>
                <Input
                  label='Name'
                  type='text'
                  register={emailRegister}
                  placeholder='Name'
                  name='name'
                  validationRules={{
                    required: 'This field is required',
                  }}
                  error={registerError?.name && registerError.name?.message}
                />
              </div>
              <div className='relative mb-4'>
                <Input
                  label='Email'
                  type='email'
                  register={emailRegister}
                  placeholder='Email Address'
                  name='email'
                  validationRules={{
                    required: 'Enter email address',
                    validate: {
                      isValidEmail: (value) =>
                        isValidEmail(value) || 'Invalid email address',
                    },
                  }}
                  error={registerError?.email && registerError.email?.message}
                />
              </div>
              <div className='relative mb-4'>
                <Input
                  type='password'
                  label='Password'
                  register={emailRegister}
                  placeholder='Password'
                  name='password'
                  validationRules={{
                    required: 'This field is required',
                  }}
                  error={
                    registerError?.password && registerError.password?.message
                  }
                />
              </div>
              <div className='relative mb-4'>
                <Input
                  type='password'
                  label='Password'
                  register={emailRegister}
                  placeholder='Password'
                  name='password_confirmation'
                  validationRules={{
                    required: 'This field is required',
                  }}
                  error={
                    registerError?.password_confirmation &&
                    registerError.password_confirmation?.message
                  }
                />
              </div>
              <Button
                type='submit'
                className='bg-secondary py-4 rounded-5 font-g-bold w-full text-white'
              >
                Register
              </Button>
            </form>
          </div>
        ) : showEmail === 'forget' ? (
          <div className='relative'>
            <ArrowDownIcon
              onClick={() => handleShowEmail('')}
              className='rotate-90 w-6 h-6 cursor-pointer'
            />
            <Typography as='h3' fontSize='24' className='mt-4 mb-2'>
              Reset Your Password
            </Typography>
            <form onSubmit={handleForgotOTP(handleForgetPassword)}>
              <div className='relative mb-4'>
                <Input
                  label='Email'
                  type='email'
                  register={forgotRegister}
                  placeholder='Email Address'
                  name='email'
                  validationRules={{
                    required: 'Enter email address',
                    validate: {
                      isValidEmail: (value) =>
                        isValidEmail(value) || 'Invalid email address',
                    },
                  }}
                  error={errorsOTP?.email && errorsOTP.email?.message}
                />
              </div>

              <Button
                type='submit'
                className='bg-secondary py-4 rounded-5 font-g-bold w-full text-white'
              >
                Reset Your Password
              </Button>
            </form>
          </div>
        ) : showEmail === 'mailOTP' ? (
          <div>
            <ArrowDownIcon
              onClick={() => handleShowEmail('')}
              className='rotate-90 w-6 h-6 cursor-pointer'
            />
            <Typography
              as='h3'
              fontSize='18'
              className='mt-4 mb-2'
              color='green'
            >
              Check your mail for OTP
            </Typography>
            <div className='border-b my-5 '></div>

            <form onSubmit={handleChangeResetPassword(handleConfirmPassword)}>
              <div className='relative mb-4'>
                <OTPInput
                  value={watch('verificationCode')}
                  onChange={(value) => setValue('verificationCode', value)}
                  numInputs={6}
                  inputType='number'
                  containerStyle='wrapperOTP'
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className='relative mb-4'>
                <Input
                  label='Password'
                  type='password'
                  register={changeRegister}
                  placeholder='Password'
                  name='password'
                  validationRules={{
                    required: 'This field is required',
                  }}
                  error={
                    errorsResetPassword?.password &&
                    errorsResetPassword.password?.message
                  }
                />
              </div>
              <div className='relative mb-4'>
                <Input
                  label='Confirm Password'
                  type='password'
                  register={changeRegister}
                  placeholder='Confirm Password'
                  name='password_confirmation'
                  validationRules={{
                    required: 'This field is required',
                  }}
                  error={
                    errorsResetPassword?.password_confirmation &&
                    errorsResetPassword.password_confirmation?.message
                  }
                />
              </div>

              <Button
                type='submit'
                className='bg-secondary py-4 rounded-5 font-g-bold w-full text-white'
              >
                Submit
              </Button>
            </form>
          </div>
        ) : (
          <div className='relative'>
            <CrossIcon
              className='ml-auto cursor-pointer'
              onClick={closeModal}
            />
            <LastHourLogo width='250' />
            <Typography as='h3' fontSize='24' className='mt-4 mb-2'>
              Get the full experience
            </Typography>
            <Typography className='mb-4'>
              Track prices, make trip planning easier and enjoy faster booking.
            </Typography>
            <FlexBox direction='column' gap='4'>
              <Button className='bg-black text-white w-full py-4 rounded-5 flex items-center justify-center gap-2 font-g-bold'>
                <IphoneIcon /> Login with Apple
              </Button>
              <Button className='bg-silver text-black w-full py-4 rounded-5 flex items-center justify-center gap-2 font-g-bold'>
                <GoogleIcon width='18' height='18' />
                Login with Google
              </Button>
              <Button
                onClick={() => handleShowEmail('email')}
                className='bg-silver text-black w-full py-4 rounded-5 flex items-center justify-center gap-2 font-g-bold'
              >
                Login with Email
              </Button>
            </FlexBox>
            <div className='flex items-center justify-between'>
              <FlexBox gap='2' alignItems='center' className='my-5'>
                <input type='checkbox' id='remember' />
                <Typography as='label' fontType='g-medium'>
                  Remember me
                </Typography>
              </FlexBox>
              <div onClick={() => handleShowEmail('register2')}>
                <Typography
                  as='h5'
                  fontSize='14'
                  className='text-primary cursor-pointer'
                >
                  Register
                </Typography>
              </div>
            </div>
            <Typography fontType='g-regular'>
              By continuing you agree to our{' '}
              <Link href='#' className='text-primary'>
                {' '}
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href='#' className='text-primary'>
                Privacy Policy
              </Link>
              .
            </Typography>
          </div>
        )}
      </div>
    </Modal>
  );
};
