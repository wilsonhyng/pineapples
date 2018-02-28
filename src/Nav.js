import React, { Component } from 'react';




class Nav extends Component {

	render() {
		const navStyle = {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: '#f77f00',
			borderStyle: 'solid',
			borderWidth: '3px',
			borderColor: '#ffffff',
			marginBottom: '-3px',
			color: '#ffffff',
		}

		const navBut = {
			padding: '20px 5% 20px 5%'
		}

		return (
        <div style={navStyle}>
					<div className="Menu" style={navBut}>
						Menu
					</div>
				<div className="Catering" style={navBut}>
						Catering
					</div>
				<div className="About Us" style={navBut}>
						About Us
					</div>
				<div className="Contact" style={navBut}>
						Contact
					</div>
        </div>
    );
	}
}

export default Nav;
