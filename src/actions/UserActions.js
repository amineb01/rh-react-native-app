import UserController from 'controllers/UserController';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  user,
});

const logoutRequest = () => ({
  type: actionTypes.LOGOUT,
});

export const login = (login, password, company_id) => async (dispatch) => {
  dispatch(loginRequest());
    UserController.login(login, password, company_id)
      .then((result) => {
        if (result && result.data.status == "success" && result.data.message == "Logged in" ){
          dispatch(loginSuccess(result.data));
        }else{
          dispatch("you're already log in");
        }
      })
      .catch((error) => {
        if (error.response) {
          dispatch(loginError(error.response.data.message));
        }else{
          dispatch(loginError("autre erreur"));
        }
      });

};

export const logout = () => (dispatch) => {
  UserController.logout();
  dispatch(logoutRequest());
};
