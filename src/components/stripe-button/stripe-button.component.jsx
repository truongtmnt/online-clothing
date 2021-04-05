import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51Ich36AetPJ7EDU5Im10B3D85cAYi7ZLp49MhVicVVDV4i52NKwv0G6VzPAhp8wVAHv3xBjp8G1RIjF2YSWVh3p700Kivh99pV";
	const onToken = (token) => {
		console.log(token);
		alert("payment successful");
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is: ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};
