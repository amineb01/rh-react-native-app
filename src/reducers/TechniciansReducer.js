import { actionTypes } from 'actions/TechniciansActions';

const initialState = {
  techniciansList: [],
  loading: false
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TECHNICIANS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.TECHNICIANS_SUCCESS:
      return {
        ...state,
        techniciansList: [...action.technicians],
        loading: false
      };
    case actionTypes.TECHNICIANS_ERROR:
      return {
        ...state,
        techniciansList: [...action.technicians],
        loading: false
      };
    default:
      return state;
  }
};

export default techniciansReducer;
