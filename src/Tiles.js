import React, { Component } from 'react';
import axios from 'axios';
import config from './config.js'

class Tiles extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			posts: []
		};
	}
	
	componentDidMount() {
		axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=` + config.pineapples)
			.then(res => {
				const posts = res.data.data.map(obj => obj.images.standard_resolution.url).slice(0,8);
				this.setState({posts});
			});
	}

	render() {
		const row = {
			display: 'flex',
			flexWrap: 'wrap',
			borderStyle: 'solid',
			borderWidth: '3px',
			borderColor: '#ffffff',
			marginBottom: '-3px'
		};
		
		const imgStyle = {
			width: '25%',
			height: '25%'
		}
	
	return (
		<div className = "tiles" alt = "tiles" style={row}>
			{this.state.posts.map((post, index) =>
				<img src={post} style={imgStyle} alt={index} key={index}/>
			)}
		</div>
	)
}
}

export default Tiles;
