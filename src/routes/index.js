import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Comics from "../pages/Comics";
import Detail from "../pages/Details";

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/comics" component={Comics} />
			<Route path="/detail" component={Detail} />
		</BrowserRouter>
	);
};

export default Routes;
