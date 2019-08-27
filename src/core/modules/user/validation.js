import { isEmail, isEmpty, isLength } from 'validator';
import { userFormFields } from './constants';
import { userFormErrors } from '../../constants';

const userValidation = (values) => {
  let errors = {};

  Object.keys(values).forEach(field => {
    if (field === userFormFields.EMAIL && !isEmail(values[field])) {
      errors[field] = userFormErrors.EMAIL;
    }
    if (field === userFormFields.PASSWORD && !isLength(values[field], { min: 7 })) {
      errors[field] = userFormErrors.PASSWORD_LENGTH;
    }
    if (
      field === userFormFields.RE_PASSWORD &&
      values[field] !== values[userFormFields.PASSWORD]
    ) {
      errors[field] = userFormErrors.PASSWORD_MATCH;
    }
    if (field !== userFormFields.AGE && isEmpty(values[field])) {
      errors[field] = userFormErrors.EMPTY;
    }
  })

  return errors;
}

export default userValidation;