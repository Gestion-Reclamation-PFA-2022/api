import { body, oneOf, param } from 'express-validator';
import RoleEnum from '../enums/role.enums';
import StatusEnum from '../enums/status.enums';

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

export const reclamationValidator = [
  body('subject')
    .isString()
    .isLength({ min: 5 })
    .trim()
    .withMessage('Subject must at leat have 5 characters'),
  body('description')
    .isString()
    .isLength({ min: 5 })
    .trim()
    .withMessage('Description must at leat have 5 characters'),
  body('date')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('Date must be valid'),
];

export const roleSignup = [
  param('role').isString().isLength({ min: 4 }).withMessage('role undefined'),
  oneOf(
    [
      param('role').toUpperCase().equals(RoleEnum.user),
      param('role').toUpperCase().equals(RoleEnum.manager),
    ],
    'role undefined'
  ),
];

export const roleLogin = [
  param('role').isString().isLength({ min: 4 }).withMessage('role undefined'),
  oneOf(
    [
      param('role').toUpperCase().equals(RoleEnum.user),
      param('role').toUpperCase().equals(RoleEnum.manager),
      param('role').toUpperCase().equals(RoleEnum.admin),
    ],
    'role undefined'
  ),
];

export const statusManagers = [
  param('status')
    .isString()
    .isLength({ min: 4 })
    .withMessage('status undefined'),
  oneOf(
    [
      param('status').toUpperCase().equals(StatusEnum.approved),
      param('status').toUpperCase().equals(StatusEnum.pending),
      param('status').toUpperCase().equals(StatusEnum.declined),
    ],
    'status undefined'
  ),
];
