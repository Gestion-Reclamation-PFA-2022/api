import { body } from 'express-validator';

export const signupValidator = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('name')
    .isString()
    .isLength({ min: 4 })
    .trim()
    .withMessage('Name must atleast have 4 characters'),
  body('password')
    .isString()
    .isLength({ min: 5 })
    .trim()
    .withMessage('Password must at least have 5 characters'),
  body('phone')
    .isString()
    .isLength({ min: 10 })
    .trim()
    .withMessage('Phone number must at least have 10 characters'),
];

export const loginValidator = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .isString()
    .isLength({ min: 5 })
    .trim()
    .withMessage('Password must at least have 5 characters'),
];
