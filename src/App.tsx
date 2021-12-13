import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";

import { GlobalStyles } from "assets/styles/global";
import * as theme from "assets/styles/theme";

import Routes from "containers/routes";

import { history } from "./configHistory";

export const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
			<GlobalStyles />

			<Router history={history}>
				<Routes />
			</Router>
		</ThemeProvider>
  );
};
