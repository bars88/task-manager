export const SET_DEFAULT_SATE = 'SET_DEFAULT_SATE';
export const setDefaultStateAction = () => ({ type: SET_DEFAULT_SATE });

export const createReducer = (reducers, initialState) => {
  return (state = initialState, action) => {
    if (Reflect.has(reducers, action.type)) {
      return reducers[action.type](state, action);
    } else if (action.type === SET_DEFAULT_SATE) {
      return initialState;
    }
    return state;
  };
};