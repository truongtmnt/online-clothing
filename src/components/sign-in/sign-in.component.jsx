import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });

		console.log(this.state.email);
	};
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h1>I already have an account</h1>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label='Email'
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						required
						handleChange={this.handleChange}
						label='Password'
					/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}