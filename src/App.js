import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components";
import './index.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Index} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
