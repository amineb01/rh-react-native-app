
export const actionTypes = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
};

const changeLanguage = newLanguage => ({
  type: actionTypes.CHANGE_LANGUAGE,
  newLanguage,
});


export const _changeLanguage = (newLanguage) => (dispatch) => {
  dispatch(changeLanguage(newLanguage));
};
