
export const actionTypes = {
  DEMANDS_REQUEST: 'DEMANDS_REQUEST',
  DEMANDS_ERROR: 'DEMANDS_ERROR',
  DEMANDS_SUCCESS: 'DEMANDS_SUCCESS',
};

const demandsRequest = () => ({
  type: actionTypes.DEMANDS_REQUEST,
});

const demandsError = error => ({
  type: actionTypes.DEMANDS_ERROR,
  error,
});

const demandsSuccess = newDemand => ({
  type: actionTypes.DEMANDS_SUCCESS,
  newDemand,
});

export const addDemandToList = (newDemand) => (dispatch) => {
  newDemand.dateDebutStmp = new Date(newDemand.dd).getTime()/1000
  newDemand.stmp = new Date().getTime()/1000
  dispatch(demandsRequest());
  dispatch(demandsSuccess(newDemand));

};
