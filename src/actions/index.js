// REDUX ACTIONS
export const ADD_CHARACTER = "ADD_CHARACTER";

export function addCharacterById (id) {

  // This object will be used by the dispatcher
  const action = {
    type: 'ADD_CHARACTER',
    id: id
  }

  return action;

}

export function removeCharacterById(id) {
  // Define how it will be interpred by the dispatcher and the reducer
  const action = {
    type: "REMOVE_CHARACTER",
    id: id
  }
  return action
}
