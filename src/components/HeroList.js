import React, { Component } from 'react';
import { connect } from 'react-redux';
// [IMPORT THE ACTION]
import { removeCharacterById } from "../actions";

class HeroList extends Component{
  render(){
    return(
      <div>
        <h4>Your Hero Squad</h4>

        <ul>
          {
            this.props.heroes.map( hero => {
              return (
                <li key={hero.id}  className="HeroList">
                  <div>
                    {hero.name}
                  </div>
                  <div
                   className="add"
                   onClick={ () => this.props.removeCharacterById(hero.id)}
                  >
                    -
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("From Herolist ",state)
  return{
    heroes: state.heroes
  }
}

// This connects the STATE and the DISPATCH ACTIONS to the reducer

export default connect(mapStateToProps, {removeCharacterById})(HeroList);
