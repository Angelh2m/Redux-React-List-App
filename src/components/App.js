import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from "./SquadStats";

class App extends Component {
  render() {
    return (
      <div className="application">
        <div className="title">
          <h2>SuperSquad</h2>
        </div>
        <div className="container list">
            <div>
              <SquadStats/>
            </div>
          <div className="row">
            <div className="col-6">
              <CharacterList/>
            </div>
            <div className="col-6">
              <HeroList/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
