import React, { Component } from 'react';
// import Tile from './Tile';
import dog1 from './Images/1.jpg';
// retrieve images from instagram api
// pass down each image to each tile
import dog2 from './Images/2.jpg';
import dog3 from './Images/3.jpg';
import dog4 from './Images/4.jpg';
import dog5 from './Images/5.jpg';
import dog6 from './Images/6.jpg';
import dog7 from './Images/7.jpg';
import dog8 from './Images/9.jpg';


class Tiles extends Component {
	posts = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8];


	render() {
		const row = {
			display: 'flex',
			flexWrap: 'wrap',
		};
		
		const imgStyle = {
			width: '25%'
		}
	
	return (
		<div className = "tiles" alt = "tiles" style={row}>
			{this.posts.map((post, index) =>
				<img src={post} style={imgStyle} alt={index} />
			)}
		</div>
		)
	}
}

export default Tiles;
