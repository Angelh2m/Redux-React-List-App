// IMPORT DATA
import characters_json from '../data/characters.json';
// IMPORT ACTION FUNCTIONS CONTROLLER
// import { ADD_CHARACTER } from '../actions';
import { combineReducers } from 'redux';



// Reducers are functions that takes two parameters
// Actions control the behaivor of the application
// State takes all the data
// [FIRST REDUCER] SET STATE
function characters(state = characters_json, action) {
  // This action is trigered by DISPATCH funtion
  switch (action.type) {

    case "ADD_CHARACTER": {
      // Take out the specified ID element
      const characters = state.filter(item => item.id !== action.id);
      return characters;
    }

    case "REMOVE_CHARACTER": {
      characters = [...state, createCharacter(action.id)];
      return characters;
    }

    default: {
      return state;
    }

  }
}

// YOU CAN CREATE A HERO FILE to make this file smaller....

// [SECOND REDUCER] SET STATE add elements
function heroes (state = [], action) {
  switch (action.type) {

    case "ADD_CHARACTER": {
      // Pass the current state of the reducer
      const heroes = [...state, createCharacter(action.id)];
      return heroes;
    }

    case "REMOVE_CHARACTER": {
      heroes = state.filter(item => item.id !== action.id);
      return heroes;
    }


    default: {
      return state;
    }

  }
}

// Helper function
function createCharacter(id) {
  const character = characters_json.find(character => character.id === id);
  return character;
}

// Combine reducers to export
const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;
