import * as actionTypes from "../actions/actionTypes";

const initialState = { data: [] };

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_USERS:
      return action.users;
    case actionTypes.ADD_USER:
      return {
        ...state,
        data: { ...state.data, [action.payload.id]: action.payload }
      };
    case actionTypes.DELETE_USER:
      let idAlreadyExists = state.data.indexOf(action.id) > -1;
      if (idAlreadyExists) {
        state.filter(user => user.id !== action.payload.id);
      } else {
        alert("This user has been deleted");
      }

    default:
      return state;
  }
}
