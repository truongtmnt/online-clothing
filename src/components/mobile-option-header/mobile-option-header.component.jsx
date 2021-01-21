import "./mobile-option-header.styles.scss";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class MobileOptionHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false,
		};
	}

	toggleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};

	render() {
		return (
			<div id='menuToggle'>
				<input
					type='checkbox'
					checked={this.state.isChecked}
					onChange={this.toggleChange}
				/>

				<span></span>
				<span></span>
				<span></span>

				<ul id='menu' onClick={this.toggleChange}>
					<Link className='option' to='/'>
						HOME
					</Link>
					<Link className='option' to='/shop'>
						SHOP
					</Link>
					<Link className='option' to='/signIn'>
						SIGN IN
					</Link>
				</ul>
			</div>
		);
	}
}
