import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navbar from './Navbar';

class Home extends Component {
	render() {
		return (
			<div>
			<Navbar />
				<h1>Home</h1>
				<Link to='/login'>Login</Link> <Link to='/register'>Register</Link>
			</div>
		)
	}
}

export default connect()(Home);
