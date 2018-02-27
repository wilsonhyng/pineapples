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

	access_token = config.ACCESS_TOKEN;
	
	componentDidMount() {
		axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=` + this.access_token)
			.then(res => {
				const posts = res.data.data.map(obj => obj.images.standard_resolution.url).slice(0,8);
				this.setState({posts});
			});
	}

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
			{this.state.posts.map((post, index) =>
				<img src={post} style={imgStyle} alt={index} key={index}/>
			)}
		</div>
	)
}
}

export default Tiles;
