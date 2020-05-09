import TechniciansController from 'controllers/TechniciansController';

export const actionTypes = {
  TECHNICIANS_REQUEST: 'TECHNICIANS_REQUEST',
  TECHNICIANS_ERROR: 'TECHNICIANS_ERROR',
  TECHNICIANS_SUCCESS: 'TECHNICIANS_SUCCESS',
};

const techniciansRequest = () => ({
  type: actionTypes.TECHNICIANS_REQUEST,
});

const techniciansError = error => ({
  type: actionTypes.TECHNICIANS_ERROR,
  error,
});

const techniciansSuccess = technicians => ({
  type: actionTypes.TECHNICIANS_SUCCESS,
  technicians,
});

export const getTechniciansList = ( companyId ) => async (dispatch) => {
  dispatch(techniciansRequest());
  try {
    const result = await TechniciansController.getTechnicians( companyId );
    if ( result.data.status == 'success' ){
      console.log('getTechniciansList')
      console.log(result.data.data.users)
      dispatch(techniciansSuccess( result.data.data.users ));
    }else{
      dispatch(techniciansError(result.data.message));
    }
  } catch (error) {
    
    if(error.response && error.response.data )
      dispatch(techniciansError(error.response.data.message));
    else
      dispatch(techniciansError(error.message));
  }
};
