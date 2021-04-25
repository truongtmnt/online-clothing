import styled from "styled-components";

export const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
	@media screen and (min-width: 320px) and (max-width: 600px) {
		.homepage {
			padding: 0;
		}
	}
`;
