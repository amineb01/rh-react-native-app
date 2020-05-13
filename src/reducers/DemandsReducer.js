import { actionTypes } from 'actions/DemandsActions';

const initialState = {
  demandsList: [],
  loading: false
};

const demandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEMANDS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DEMANDS_SUCCESS:
      return {
        ...state,
        demandsList: [...state.demandsList, action.newDemand],
        loading: false
      };
    case actionTypes.DEMANDS_ERROR:
      return {
        ...state,
        demandsList: [...action.demands],
        loading: false
      };
    default:
      return state;
  }
};

export default demandsReducer;
