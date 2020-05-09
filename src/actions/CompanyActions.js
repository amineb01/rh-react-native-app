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

    const result = CompanyController.getCompany( companyKey )
    .then((result) => {
      if (result && result.data.status == "success" && result.data.data ){
        let company = result.data.data.companies[0]
        dispatch( getCompany( company ) );
        dispatch( getTechniciansList( company.id ) )
      }else{
        dispatch(companyError(result.data.message));
      }
    })
    .catch((error) => {
      if( error.response.status == 500){
        dispatch(companyError("erreur serveur"));
      }
      else if (error.response) {
        dispatch(companyError(error.response.data.message));
      }else{
        dispatch(companyError("autre erreur"));
      }
    });
  };
