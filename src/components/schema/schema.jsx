import * as yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  password: yup.string().required('Please enter your password'),
});

export const registerSchema = yup.object().shape({
  username: yup.string().min(5, 'Username must be between 5 to 20 characters').max(20, 'Username must be between 5 to 20 characters').required('Username required'),
  email: yup.string().email('Invalid email').required('Email required'),
  firstname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your first name'),
  lastname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your last name'),
  password: yup
    .string()
    .min(8, 'It must be minimum 8 characters')
    .matches(passwordRegex, {
      message: 'Must have at least 1 upper, 1 lower character, and 1 digit',
    })
    .required('Password required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
  role: yup.string().required('Role required'),
});

export const registerParentSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  firstname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your first name'),
  lastname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your last name'),
  password: yup
    .string()
    .min(8, 'It must be minimum 8 characters')
    .matches(passwordRegex, {
      message: 'Must have at least 1 upper, 1 lower character, and 1 digit',
    })
    .required('Password required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
  termsandconditions: yup.bool().oneOf([true], 'You need to read and accept the terms and conditions'),
  hear: yup.string().max(50, 'It must be maximum 50 characters').required('Please choose one of the options provided.'),
  province: yup.string().required('Please choose one of the options provided.'),
  subscription: yup.boolean(),
});

export const editParentSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  firstname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your first name'),
  lastname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your last name'),
});

const getMaxDate = () => {
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setFullYear(today.getFullYear() - 2);

  const year = maxDate.getFullYear();
  const month = (maxDate.getMonth() + 1).toString().padStart(2, '0');
  const day = maxDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const registerStudentSchema = yup.object().shape({
  firstname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your first name'),
  lastname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your last name'),
  date: yup.date().required('Date of birth required').max(new Date(getMaxDate()), 'Date of Birth cannot be in the last 2 years'),
  // level: yup.string().required('Please select a level'),
  language: yup.string().required('Please select a language'),
  // availableto: yup.string().required('Please select available time'),
  // availablefrom: yup.string().required('Please select available time'),
  // gender: yup.string().required('Gender is required'),
  level: yup.string().required('Level is required'),
});

export const registerTeacherSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  firstname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your first name'),
  lastname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your last name'),
  password: yup
    .string()
    .min(8, 'It must be minimum 8 characters')
    .matches(passwordRegex, {
      message: 'Must have at least 1 upper, 1 lower character, and 1 digit',
    })
    .required('Password required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
  termsandconditions: yup.bool().oneOf([true], 'You need to read and accept the terms and conditions'),
  language: yup.string().required('Please select a language'),
  daysofweek: yup.object({
    Sunday: yup.boolean(),
    Monday: yup.boolean(),
    Tuesday: yup.boolean(),
    Wednesday: yup.boolean(),
    Thursday: yup.boolean(),
    Friday: yup.boolean(),
    Saturday: yup.boolean(),
  }),
});

export const editTeacherSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  firstname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your first name'),
  lastname: yup.string().max(12, 'It must be maximum 12 characters').required('Please enter your last name'),
  hasUserPermit: yup.boolean().test('aboutMe-and-hasUserPermit-validation', 'Cannot set hasUserPermit to true if aboutMe is empty', function (value) {
    const { aboutMe } = this.parent;
    // Check if hasUserPermit is true and aboutMe is empty
    return !(value && !aboutMe);
  }),
  hasAdmitPermit: yup.boolean(),
  aboutMe: yup.string().max(500, 'It must be maximum 500 characters.'),
  imgString: yup.string(),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Please enter your registered email address'),
});

export const activationEmailSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Please enter your registered email address'),
});

export const contactEmailSchema = yup.object().shape({
  recipientemail: yup.string().email('Invalid email').required('Please enter your registered email address'),
  message: yup.string().required('Please add your message'),
  subject: yup.string().required('Please enter your subject'),
});

export const supportEmailSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Please enter your email address'),
  firstname: yup.string().required('Please enter your Firstname'),
  lastname: yup.string().required('Please enter your Lastname'),
  isUser: yup.string().required('Please select Yes/No'),
  issue: yup.string().required('Please select an Issue'),
  message: yup.string().required('Please add your message'),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'It must be minimum 8 characters')
    .matches(passwordRegex, {
      message: 'Must have at least 1 upper, 1 lower character, and 1 digit',
    })
    .required('Password required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
});

export const changePasswordSchema = yup.object().shape({
  currentpassword: yup.string().required('Please enter your current password'),
  password: yup
    .string()
    .min(8, 'It must be minimum 8 characters')
    .matches(passwordRegex, {
      message: 'Must have at least 1 upper, 1 lower character, and 1 digit',
    })
    .required('Password required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
});

export const reportSchema = yup.object().shape({
  moods: yup.array().min(1, 'Please select at least one mood'),
  activities: yup.array().min(1, 'Please select at least one activity'),
  notes: yup.string().max(200, 'Maximum 200 characters allowed').required('Please add a note'),
});

export const operationSchema = yup.object().shape({
  dayfrom: yup.string().required('Please select starting day'),
  dayto: yup.string().required('Please select ending day'),
  starthour: yup.string().required('Please select starting hour'),
  endhour: yup.string().required('Please select ending hour'),
  minute: yup.number().min(0, 'Minimum is 0').max(59, 'Maximum is 59').required('Please select starting minute'),
});

const ageRangeSchema = yup.object().shape({
  minAge: yup.number().integer().required(),
  maxAge: yup.number().integer().required(),
});

export const applicationSchema = yup.object().shape({
  appname: yup.string().matches(/^\S*$/, 'Spaces are not allowed').max(30, 'Maximum 30 characters allowed').required('Please enter application name'),
  minage: yup.number().min(2, 'Minimum age is 2').max(60, 'You can enter up to 60').required('Please enter minimum age requirement'),
  maxage: yup.number().min(4, 'Minimum age is 4').max(60, 'You can enter up to 90').moreThan(yup.ref('minage'), 'Maximum age should be greater than minimum age').required('Please enter maximum age requirement'),
  scene: yup.string().matches(/^\S*$/, 'Spaces are not allowed').max(50, 'Maximum 50 characters allowed').required('Please enter scene name'),
  ageranges: yup.array().of(ageRangeSchema),
});

export const durationSchema = yup.object().shape({
  durations: yup.array().min(1, 'At least 1 duration is required').of(yup.number().integer()),
});

export const adminDurationSchema = yup.object().shape({
  adminduration: yup.number().min(1, 'Minimum is 1mn').max(180, 'Maximum is 180mn').required('Please enter admin session duration in minutes!'),
});

export const rejoinDurationSchema = yup.object().shape({
  rejoinduration: yup.number().min(10, 'Minimum is 10 seconds').max(1200, 'Maximum is 1200 seconds').required('Please enter rejoin session duration in seconds!'),
});

export const configSchema = yup.object().shape({
  dayfrom: yup.string().required('Please select starting day'),
  dayto: yup.string().required('Please select ending day'),
  starthour: yup.string().required('Please select starting hour'),
  endhour: yup.string().required('Please select ending hour'),
  minute: yup.number().min(0, 'Minimum is 0').max(59, 'Maximum is 59').required('Please select starting minute'),
  appname: yup.string().matches(/^\S*$/, 'Spaces are not allowed').max(30, 'Maximum 30 characters allowed').required('Please enter application name'),
  minage: yup.number().min(2, 'Minimum age is 2').max(60, 'You can enter up to 60').required('Please enter minimum age requirement'),
  maxage: yup.number().min(4, 'Minimum age is 4').max(60, 'You can enter up to 90').moreThan(yup.ref('minage'), 'Maximum age should be greater than minimum age').required('Please enter maximum age requirement'),
  scene: yup.string().matches(/^\S*$/, 'Spaces are not allowed').max(50, 'Maximum 50 characters allowed').required('Please enter scene name'),
  durations: yup.array().min(1, 'At least 1 duration is required').of(yup.number().integer()),
});

export const subscriptionSchema = yup.object().shape({
  subscription: yup.boolean(),
});

export const faqSchema = yup.object().shape({
  question: yup.string().min(10, 'This is too short (Min 10 words').max(255, 'This is too long (Max 255 words)').required('Please enter your question'),
  answer: yup.string().required('Please select ending day'),
  tags: yup.array().min(1, 'At least 1 tag is required').of(yup.string()),
  encodedImage: yup.string(),
});
