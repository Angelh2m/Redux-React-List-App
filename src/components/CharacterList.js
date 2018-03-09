import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// Add the action this will get triggered by the dispatch method
import {addCharacterById} from '../actions';



class CharacterList extends Component{
  render () {
      // console.log('This props', this.props);
    return (
      <div>
          <h3>Characters</h3>
          <ul>
            {
              this.props.characters.map(character => {
                return (
                  <li key={character.id}>
                    <div>{character.name}</div>
                    <div
                    className="add"
                    onClick={ () => this.props.addCharacterById(character.id) }
                    >+</div>
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

// SET the state as props in all the component
function mapStatetoProps(state) {
    console.log("From Character list ", state.characters);
    return {
    characters: state.characters
  }
}
// [LONG METHOD] to pass the action
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addCharacterById}, dispatch);
// }

// [CONNECT TO THE REDUCER]
export default connect(mapStatetoProps, {addCharacterById} )(CharacterList);
