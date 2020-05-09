import { actionTypes } from 'actions/CompanyActions';

const initialState = {
  company: null,
  loading: false,
  error: null,

};

const companyReducer = (state = initialState, action) => {
console.log(action)
  switch (action.type) {

    case actionTypes.COMPANY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.COMPANY_SUCCESS:
      return {
        ...state,
        company: {... action.company},
        error: null,
        loading: false
      };
    case actionTypes.COMPANY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default companyReducer;
