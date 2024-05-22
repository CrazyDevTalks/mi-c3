import axios from "axios";

export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const DELETE_PERSON = "DELETE_PERSON";
export const SEARCH_PEOPLE = "SEARCH_PEOPLE";
export const FETCH_VEHICLES = "FETCH_VEHICLES";
export const DELETE_VEHICLE = "DELETE_VEHICLE";

export const fetchPeople = () => async (dispatch) => {
  const response = await axios.get("https://swapi.dev/api/people");
  dispatch({ type: FETCH_PEOPLE, payload: response.data.results });
};

export const deletePerson = (id) => {
  return { type: DELETE_PERSON, payload: id };
};

export const searchPeople = (query) => async (dispatch) => {
  const response = await axios.get(
    `https://swapi.dev/api/people/?search=${query}`
  );
  dispatch({ type: SEARCH_PEOPLE, payload: response.data.results });
};

export const fetchVehicles = (urls) => async (dispatch) => {
  let vehicles = [];
  console.log(urls)
  if(urls)
    for (let i = 0; i < urls.length; i++) {
        const response = await axios.get(`${urls[i]}`);
        vehicles.push(response.data);
    }
  dispatch({ type: FETCH_VEHICLES, payload: vehicles });
};

export const deleteVehicle = (id) => {
  return { type: DELETE_VEHICLE, payload: id };
};
