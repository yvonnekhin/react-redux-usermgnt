import * as actionTypes from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_USER:
      return action.user.data;
    case actionTypes.UPDATE_USER:
      return {
        id: action.id,
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name
      };
    default:
      return state;
  }
}
