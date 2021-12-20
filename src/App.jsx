import React from "react";
import {
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
	let location = useLocation();
	return (
		<>
			{location.pathname !== "/" && <Header />}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;