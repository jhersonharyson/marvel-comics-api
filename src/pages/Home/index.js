import React from "react";

import Header from "../../components/Header";

function Home() {
	return (
		<div>
			<Header />
			<div style={{padding: "0px 50px"}}>
				<div className="middle-content"></div>
				<div className="sidebar-right"></div>
			</div>
		</div>
	);
};

export default Home;
