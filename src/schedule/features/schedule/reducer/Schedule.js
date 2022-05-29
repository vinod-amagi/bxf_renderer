import * as actionTypes from "../actions/actionTypes";

const initialState = {
  schedule: undefined
};


export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const scheduleFulfilled = (state, action) => {

  if (action.payload) {
    return updateObject(state, action.payload);
  } else {
    return updateObject(state, []);
  }
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_SCHEDULE_FULFILLED: return scheduleFulfilled(state, action);
    default:
      return state;
  }
}