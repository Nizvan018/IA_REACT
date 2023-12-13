import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Buscar_imagen from "./components/Buscar_imagenes";
import Buscar_productos from "./components/Buscar_productos";
import Tutorial from "./components/Tutorial";
import Sobre_nosotros from "./components/Sobre_nosotros";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<main className="flex justify-center container px-10 pt-28 pb-10 min-w-full">
				<Routes>
					<Route path="/" Component={Index} />
					<Route path="/buscar_imagenes" Component={Buscar_imagen} />
					<Route path="/buscar_productos" Component={Buscar_productos} />
					<Route path="/tutorial" Component={Tutorial} />
					<Route path="/sobre_nosotros" Component={Sobre_nosotros} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
