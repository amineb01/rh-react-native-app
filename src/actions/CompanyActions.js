import CompanyController from 'controllers/CompanyController';
import { getTechniciansList } from './TechniciansActions';
export const actionTypes = {
  COMPANY: 'COMPANY',
  COMPANY_REQUEST: 'COMPANY_REQUEST',
  COMPANY_SUCCESS: 'COMPANY_SUCCESS',
  COMPANY_ERROR  : 'COMPANY_ERROR',
};

const companyRequest = () => ({
  type: actionTypes.COMPANY_REQUEST,
});

const companyError = error => ({
  type: actionTypes.COMPANY_ERROR,
  error,
});

const getCompany = company => ({
  type: actionTypes.COMPANY_SUCCESS,
  company,
});

export const connectCompany = ( companyKey ) => async (dispatch) => {
  dispatch(companyRequest());
  try {
    const result = await CompanyController.getCompany( companyKey );
    if ( result.data.status == 'success' ){
      let company = result.data.data.companies[0]
      dispatch( getCompany( company ) );
      dispatch( getTechniciansList( company.id ) )
    }else{
      dispatch(companyError(result.data.message));
    }
  } catch (error) {
    if(error.response && error.response.data )
      dispatch(companyError(error.response.data.message));
    else
      dispatch(companyError(error.message));
  }
};
