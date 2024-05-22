import { combineReducers } from 'redux';
import vehicleReducer from './vehicleReducer';
import peopleReducer from './peopleReducer';

export default combineReducers({
  vehicleReducer,
  peopleReducer
});