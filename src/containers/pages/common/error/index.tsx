import React from "react";
import styled from "styled-components/macro";

import Layout from "containers/layout";

const Error = () => {

	return (
		<Layout>
			<Text>404 - Error</Text>
		</Layout>
	);
};

// eslint-disable-next-line import/no-default-export
export default Error;

const Text = styled.div`
	margin-top: ${props => props.theme.spacing.sm * 4}px;
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.title}px;
  font-weight: 700;
  text-align: center;
`;
