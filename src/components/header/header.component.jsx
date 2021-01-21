import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import MobileOptionHeader from "../../components/mobile-option-header/mobile-option-header.component";
import { auth } from "../../firebase/firebase.utils";

export default function Header({ currentUser }) {
	const isMobile = window.innerWidth < 400;
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>

			{isMobile ? (
				<MobileOptionHeader />
			) : (
				<div className='options'>
					<Link className='option' to='/'>
						HOME
					</Link>
					<Link className='option' to='/shop'>
						SHOP
					</Link>

					{currentUser ? (
						<div className='option' onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					) : (
						<Link className='option' to='/signIn'>
							SIGN IN
						</Link>
					)}
				</div>
			)}
		</div>
	);
}
