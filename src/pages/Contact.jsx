import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useForm } from '@formspree/react';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Fullname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.number().typeError('Phone must be a number'),
  eventdate: Yup.date().min(new Date(), 'Please choose future date'),
  eventtype: Yup.string().oneOf(['Corporate', 'Wedding', 'Birthday Party', 'Bar Mitzvah', 'School Events', 'Charity', 'Other']),
  address: Yup.string().max(250, 'Address must be at most 250 characters'),
  booth: Yup.string().oneOf(['360 Booth', 'Glambot']),
  hear: Yup.string(),
  description: Yup.string().max(1000, 'Description must be at most 1000 characters'),
});

const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  eventdate: '',
  eventtype: '',
  address: '',
  booth: '',
  hear: '',
  description: '',
};

const options = [
  { value: 'google', label: 'Google' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'referral', label: 'Referral' },
  { value: 'others', label: 'Others' },
];

const Contact = () => {
  const [state, handleSubmit] = useForm('xpzvkgpo');
  const [focusedInput, setFocusedInput] = useState(null);

  if (state.succeeded) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const divStyle = `flex flex-col gap-y-1`;
  const errorStyle = `text-errorMain text-[0.8rem]`;
  const labelStyle = `text-grey400 font-normal text-[0.9rem]`;

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const inputClassName = (inputName) => `text-[0.8rem] text-fcPrimary font-light px-3 py-1 border-b-[1px] outline-0 ${focusedInput === inputName ? 'border-primaryLight' : 'border-grey300'} transition-all duration-500`;

  return (
    <div className='w-screen min-h-[35rem] flex flex-col justify-center py-[6rem] pb-[7rem] bg-secondaryLight relative'>
      <div className='max-w-[1420px] mx-auto items-center justify-center px-4 sm:px-10 py-10 bg-paper rounded-lg'>
        <div className={`${state.succeeded ? 'flex' : 'hidden'} flex-col text-fcPrimary text-[0.9rem] gap-y-4`}>
          <h2 className='text-[1.3rem] text-center mb-6 text-primaryLight font-medium'>Thank You!</h2>
          <p>We appreciate you reaching out to us.</p>
          <p>Your message has been received and we will get back to you as soon as possible.</p>
          <p>Have a wonderful day!</p>
          <Link to={'/'} className='w-full px-2 py-2 mt-4 text-paper bg-primaryLight rounded-md font-semibold text-[0.8rem] tracking-wide uppercase hover:brightness-[1.6] bri transition-all duration-300 text-center'>
            Back to the home page
          </Link>
        </div>
        <h2 className='mb-10 text-[1.4rem] sm:text-[2rem] font-bold text-primaryLight text-center w-full leading-[2rem] sm:leading-[3rem] sm:text-start uppercase py-2 border-b-2 border-primaryLight flex justify-center items-center'>Contact Us</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {() => (
            <Form className={`${!state.succeeded ? 'flex' : 'hidden'} flex-col gap-y-10 justify-center px-5 min-w-[280px] sm:min-w-[450px] md:min-w-[600px]`}>
              <div className={divStyle}>
                <label htmlFor='fullname' className={labelStyle}>
                  Full name *
                </label>
                <Field type='text' name='fullname' placeholder='Your name here' className={inputClassName('fullname')} onFocus={() => handleFocus('fullname')} onBlur={handleBlur} />
                <ErrorMessage name='fullname' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='email' className={labelStyle}>
                  Email *
                </label>
                <Field type='email' name='email' placeholder='E.g. myemail@email.com' className={inputClassName('email')} onFocus={() => handleFocus('email')} onBlur={handleBlur} />
                <ErrorMessage name='email' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='phone' className={labelStyle}>
                  Phone number
                </label>
                <Field type='number' name='phone' placeholder='E.g. 611 123 12 12' className={inputClassName('phone')} onFocus={() => handleFocus('phone')} onBlur={handleBlur} />
                <ErrorMessage name='phone' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='eventdate' className={labelStyle}>
                  Event Date
                </label>
                <Field type='date' name='eventdate' placeholder='YYYY/MM/DD' className={inputClassName('eventname')} onFocus={() => handleFocus('eventname')} onBlur={handleBlur} />
                <ErrorMessage name='eventdate' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='eventtype' className={labelStyle}>
                  Event Type
                </label>
                <Field as='select' name='eventtype' className={inputClassName('eventtype')} onFocus={() => handleFocus('eventtype')} onBlur={handleBlur}>
                  <option value=''>Select an option</option>
                  <option value='Corporate'>Corporate</option>
                  <option value='Wedding'>Wedding</option>
                  <option value='Birthday Party'>Birthday Party</option>
                  <option value='Bar Mitzvah'>Bar Mitzvah</option>
                  <option value='School Events'>School Events</option>
                  <option value='Charity'>Charity</option>
                  <option value='Other'>Other</option>
                </Field>
                <ErrorMessage name='eventtype' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='address' className={labelStyle}>
                  Venue Name/ Address
                </label>
                <Field type='text' name='address' placeholder='750 Yonge Street, Toronto' className={inputClassName('address')} onFocus={() => handleFocus('address')} onBlur={handleBlur} />
                <ErrorMessage name='address' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='booth' className={labelStyle}>
                  Booth Type
                </label>
                <Field as='select' name='booth' className={inputClassName('booth')} onFocus={() => handleFocus('booth')} onBlur={handleBlur}>
                  <option value=''>Select an option</option>
                  <option value='360 Booth'>360 Booth</option>
                  <option value='Glambot'>Glambot</option>
                </Field>
                <ErrorMessage name='booth' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='hear' className={labelStyle}>
                  How did you hear about us?
                </label>
                <Field as='select' name='hear' className={inputClassName('hear')} onFocus={() => handleFocus('hear')} onBlur={handleBlur}>
                  <option value=''>Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name='hear' component='div' className={errorStyle} />
              </div>

              <div className={divStyle}>
                <label htmlFor='description' className={labelStyle}>
                  Tell me more about this project
                </label>
                <Field as='textarea' name='description' placeholder='What do I need to know about the project?' rows='4' className={`border-[1px] border-grey300 px-2 py-2 text-[0.8rem] font-light outline-primaryLight`} />
                <ErrorMessage name='description' component='div' className={errorStyle} />
              </div>

              <span className={`${labelStyle} text-[0.7rem]`}>* required fields</span>

              <button type='submit' disabled={state.submitting} className='w-full px-2 py-3 text-paper bg-primaryLight disabled:bg-grey600 rounded-md font-semibold text-[0.9rem] tracking-wide uppercase hover:brightness-[1.6] bri transition-all duration-300'>
                {state.submitting ? 'Sending information...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
