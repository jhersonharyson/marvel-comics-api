import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Comics from "../pages/Comics";

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/comics" component={Comics} />
		</BrowserRouter>
	);
};

export default Routes;
