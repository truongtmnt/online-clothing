import React from "react";

import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = (props) => {
	return (
		<div className='homepage'>
			<h1>Welcome to my Homepage</h1>

			<Directory />
		</div>
	);
};

export default HomePage;
