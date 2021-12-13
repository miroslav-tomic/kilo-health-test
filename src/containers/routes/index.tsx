import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import LandingPage from "containers/pages/common/landing";
import QuestionPage from "containers/pages/common/questions";
import ErrorPage from "containers/pages/common/error";

interface Props {
	isLoggedIn: boolean;
}

const WelcomePage = () => {
	return (<div>Welcome page</div>);
};

const Routes = ({ isLoggedIn }: Props) => {
	const GuestRoutes = () => {
		return (
			<Switch>
				<Route exact path="/" component={LandingPage} />,
				<Route exact path="/questions/:id" component={QuestionPage} />
				<Route exact path="/dashboard" component={WelcomePage} />,
				<Redirect exact  to="/"/>
			</Switch>
		);
	};

	const AuthRoutes = () => {
		return (
			<Switch>
				<Route exact path="/dashboard" component={WelcomePage} />,

				<Route exact component={ErrorPage} />
			</Switch>
		);
	};

	return (
		<>
			{isLoggedIn ? AuthRoutes() : GuestRoutes()}
		</>
	);
};

const mapStateToProps = (state: any) => ({
	isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
	{},
	dispatch
);

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
