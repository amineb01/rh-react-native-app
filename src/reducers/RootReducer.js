import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import todos from './TodosReducer';
import settings from './SettingsReducer';
import company from './CompanyReducer';
import technicians from './TechniciansReducer';

const rootReducer = combineReducers({
  todos,
  error,
  user,
  status,
  company,
  technicians,
  settings
});

export default rootReducer;
