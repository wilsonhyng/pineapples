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
      justifyContent: 'center',
      backgroundColor: '#f77f00',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: '#ffffff',
      marginTop: '-3px'
    };
    
    const column = {
      display: 'flex',
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',

    }

    return (
      <div className="Items">
        <div style={row}>
          <img src={`https://instagram.fsnc1-1.fna.fbcdn.net/vp/c56c5287fd7f451a344f3fd0f5b667f0/5B4B830A/t51.2885-15/e35/22710397_546121372398248_3266704464085516288_n.jpg`} style={column} alt="Dole Whip"/>
          <h1 className="App-title" style={column} >Dole Whip</h1>
        </div>
        <div style={row}>
          <h1 className="App-title" style={column} >Shaved Ice</h1>
          <img src={`https://instagram.fsnc1-1.fna.fbcdn.net/vp/630c1de565684be2a095531a496efaac/5B152B70/t51.2885-15/e35/13395066_1304264009603689_21165880_n.jpg`} style={column} alt="Shaved Ice"/>
        </div>
        <div style={row}>
          <img src={`https://instagram.fsnc1-1.fna.fbcdn.net/vp/f6abbdff37b62b58e5083755ae68139f/5B32D2B5/t51.2885-15/e35/28155429_486746838386951_7245121950131945472_n.jpg`} style={column} alt="Acai Bowl" />
          <h1 className="App-title" style={column} >Acai Bowl</h1>
        </div>
      </div>
    )
  }
}

export default Items;
