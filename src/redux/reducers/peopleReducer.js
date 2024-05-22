import { FETCH_PEOPLE, DELETE_PERSON, SEARCH_PEOPLE } from '../actions';

const initialState = {
  people: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return { ...state, people: action.payload };
    case SEARCH_PEOPLE:
      return { ...state, people: action.payload };
    case DELETE_PERSON:
      return { ...state, people: state.people.filter(person => person.url !== action.payload) };
    default:
      return state;
  }
};

export default peopleReducer;