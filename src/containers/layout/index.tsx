import React from "react";
import styled from "styled-components/macro";

interface LayoutProps {
	children: any;
}

const Layout = ({ children }: LayoutProps) => {

	return (
		<Wrapper>
			{children}
		</Wrapper>
	);
};

// eslint-disable-next-line import/no-default-export
export default Layout;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: ${props => props.theme.colors.mainBg};
`;

