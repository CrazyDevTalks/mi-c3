import { FETCH_VEHICLES, DELETE_VEHICLE } from '../actions';

const initialState = {
  vehicles: [],
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, vehicles: action.payload };
    case DELETE_VEHICLE:
      return { ...state, vehicles: state.vehicles.filter(vehicle => vehicle.url !== action.payload) };
    default:
      return state;
  }
};

export default vehicleReducer;