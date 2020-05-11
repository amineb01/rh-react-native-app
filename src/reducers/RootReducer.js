import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import todos from './TodosReducer';
import settings from './SettingsReducer';
import company from './CompanyReducer';
import technicians from './TechniciansReducer';
import demands from './DemandsReducer';

const rootReducer = combineReducers({
  todos,
  error,
  user,
  status,
  company,
  technicians,
  settings,
  demands
});

export default rootReducer;
