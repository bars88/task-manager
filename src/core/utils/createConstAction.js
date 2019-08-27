import { REQUEST, SUCCESS, FAILURE, CANCEL, CLEAR_FAILURE_ERROR } from "./constTypes";

const withPrefix = (type, prefix) =>
  `${type}_${prefix}`;

export const createConstants = (type) => ({
  [REQUEST]: withPrefix(type, REQUEST),
  [SUCCESS]: withPrefix(type, SUCCESS),
  [FAILURE]: withPrefix(type, FAILURE),
  [CANCEL]: withPrefix(type, CANCEL),
  [CLEAR_FAILURE_ERROR]: withPrefix(type, CLEAR_FAILURE_ERROR),
});

export const createActions = (
  constants
) => ({
  canceled: payload => ({ type: constants[CANCEL], payload }),
  failure: error => ({ type: constants[FAILURE], error }),
  request: payload => ({ type: constants[REQUEST], payload }),
  success: payload => ({ type: constants[SUCCESS], payload }),
  clearFailure: payload => ({
    type: constants[CLEAR_FAILURE_ERROR],
    payload,
  }),
});