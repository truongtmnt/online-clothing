import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomepageContainer } from "./homepage.styles";

const HomePage = (props) => {
	return (
		<HomepageContainer>
			<h1>Welcome to my Homepage</h1>

			<Directory />
		</HomepageContainer>
	);
};

export default HomePage;
