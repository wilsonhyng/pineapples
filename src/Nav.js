import React, { Component } from 'react';




class Nav extends Component {

	render() {
		const navStyle = {
			display: 'flex',
			justifyContent: 'center',
		}

		const navBut = {
			padding: '20px 40px 20px 40px'
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
