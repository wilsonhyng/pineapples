import React, { Component } from 'react';
import dog1 from './Images/1.jpg';
// retrieve images from instagram api
// pass down each image to each tile
import dog2 from './Images/2.jpg';
import dog3 from './Images/3.jpg';



class Items extends Component {

  render() {

    const row = {
      display: 'flex',
      flexWrap: 'nowrap',
      padding: '0 4px',
      justifyContent: 'center'
    };

    const column = {
      display: 'flex',
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    }

    return (
      <div className="Items">
        <div style={row}>
          <img src={dog1} style={column} alt="Dog1"/>
          <h1 className="App-title" style={column} >Dog1</h1>
        </div>
        <div style={row}>
          <h1 className="App-title" style={column} >Dog2</h1>
          <img src={dog2} style={column} alt="Dog2"/>
        </div>
        <div style={row}>
          <img src={dog3} style={column} alt="Dog3" />
          <h1 className="App-title" style={column} >Dog3</h1>
        </div>
      </div>
    )
  }
}

export default Items;
