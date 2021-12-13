import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components/macro";

interface AuthenticatedProps {
	children?: any;
}

const AuthenticatedLayout = ({ children }: AuthenticatedProps) => {

	return (
		<Wrapper>

			<Container>
				{children}
			</Container>

		</Wrapper>
	);
};

const mapStateToProps = (store: any) => ({
	user: store.signUp.user
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
	{},
	dispatch
);

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedLayout);

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: ${props => props.theme.colors.mainBg};
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
