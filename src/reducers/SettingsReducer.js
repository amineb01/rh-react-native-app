import { actionTypes } from 'actions/SettingsActions';

const initialState = {
  language: 'fr'

};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.newLanguage
      };
    default:
      return state;
  }
};

export default settingsReducer;
