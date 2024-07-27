import * as Yup from 'yup';

// Base schema with common validation rules
const baseValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
});

// Sign-Up schema extends the base schema
const signUpValidationSchema = baseValidationSchema.shape({
  fullName: Yup.string()
    .min(2, 'Full Name must be at least 2 characters')
    .required('Full Name is required'),
});

// Export schemas for use in different forms
export { baseValidationSchema, signUpValidationSchema };
