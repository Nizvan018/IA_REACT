import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Buscar_imagen from "./components/Buscar_imagenes";
import Navbar from "./components/Navbar";
import Buscar_productos from "./components/Buscar_productos";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<main className="flex justify-center container px-10 pt-28 pb-10 min-w-full">
				<Routes>
					<Route path="/" Component={Index} />
					<Route path="/buscar_imagenes" Component={Buscar_imagen} />
					<Route path="/buscar_productos" Component={Buscar_productos} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
