import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import MobileOptionHeader from "../../components/mobile-option-header/mobile-option-header.component";
import CardIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
	HeaderContainer,
	OptionContainer,
	OptionLink,
	LogoContainer,
} from "./header.styles.jsx";

const Header = ({ currentUser, hidden }) => {
	const isMobile = window.innerWidth < 400;
	return (
		<HeaderContainer>
			<LogoContainer className='logo-container' to='/'>
				<Logo className='logo' />
			</LogoContainer>

			{isMobile ? (
				<MobileOptionHeader />
			) : (
				<OptionContainer>
					<OptionLink to='/'>HOME</OptionLink>
					<OptionLink to='/shop'>SHOP</OptionLink>

					{currentUser ? (
						<OptionLink as='div' onClick={() => auth.signOut()}>
							SIGN OUT
						</OptionLink>
					) : (
						<OptionLink to='/signIn'>SIGN IN</OptionLink>
					)}

					<CardIcon />
				</OptionContainer>
			)}
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};
const mapStateToProp = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
}); //get state from redux reducer

export default connect(mapStateToProp)(Header);
