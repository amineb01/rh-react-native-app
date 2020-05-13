import { actionTypes } from 'actions/UserActions';

const initialState = {
  user: null,
  loading: false
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: {...action.user, connect_on: Math.floor(Date.now() / 1000) },
        error: null,
        loading: false
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};


export default userReducer;
