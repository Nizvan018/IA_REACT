import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="z-50 fixed flex items-center w-full py-5 px-8 mx-2 border-b border-white/20 backdrop-blur-sm bg-gray-800/80">
            <Link to={'/'} className="text-xl font-light pr-10 border-r border-white/20"><span className="text-cyan-500 font-semibold">YOLO</span>Find</Link>

            <div>
                <ul className="flex gap-6 pl-10">
                    <li>
                        <Link to={'/buscar_imagenes'} className="text-sm font-semibold text-gray-500 duration-300 hover:text-gray-200">Buscar imágenes</Link>
                    </li>
                    <li>
                        <Link to={'/buscar_productos'} className="text-sm font-semibold text-gray-500 duration-300 hover:text-gray-200">Buscar productos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;