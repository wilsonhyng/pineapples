import React, { Component } from 'react';

class Tile extends Component {

	render() {

		return (
			<img src={this.props.dog} alt='tile'></img>
		)
	}
}

export default Tile;
