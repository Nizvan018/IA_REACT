import React from "react";
import { Link } from "react-router-dom";

const Tutorial = () => {
    return (
        <div className='w-full max-w-4xl'>
            <h1>¿Cómo funciona <span className="text-cyan-500 font-semibold">YOLO</span>Find?</h1>
            <p className="mt-4">A continuación encontrarás una breve explicación del funcionamiento de <span className="text-gray-300 font-medium">YOLOFind</span>, para que puedas utilizar correctamente las dos opciones disponibles, y realizar búsquedas satisfactorias con tus imágenes.</p>

            <section id="imagenes">
                <p class="subtitle mt-10">TUTORIAL PARA</p>
                <h2>Buscar imágenes</h2>
                <p>La primera opción disponible en nuestro sistema es <span className="text-gray-300 font-medium">Buscar imágenes</span>, aquí podrás ingresar un texto a buscar en Google y las <a href='#clases' className="text-gray-300 font-medium">Clases de objetos</a> a identificar. En la tarjeta del formulario existen dos campos a rellenar:</p>
                <div className="flex justify-between mt-8 gap-10">
                    <div className="w-1/2">
                        <h3>Búsqueda:</h3>
                        <p>Aquí debes introducir el texto que deseas buscar en Google, como por ejemplo: Perro salchicha con chaleco amarillo.</p>
                    </div>
                    <div className="w-1/2">
                        <div className="container flex flex-col max-w-xl p-8 border border-cyan-500/30 rounded-lg bg-slate-700 duration-500 shadow-cyan-500/20 shadow-2xl">
                            <p className="subtitle">BUSCAR</p>
                            <h2 className="text-3xl">Imágenes</h2>
                            <p className='mb-2'>Introduce el texto a buscar en Google y las clases de los objetos a identificar.</p>
                            <Link to={'/como_funciona'} className='w-fit text-gray-300 text-xs mb-8 hover:text-gray-100'>¿Cómo funciona?</Link>

                            <form className="flex flex-col">
                                <label htmlFor="busqueda" className="text-sm text-slate-300 mb-1">Búsqueda:</label>
                                <input id="busqueda" name="busqueda" type="text" placeholder="¿Qué quieres buscar?" required className="input-cyan" />

                                <label htmlFor="objetos" className="text-sm text-slate-300 mb-1 mt-6">Objetos:</label>
                                <input id="objetos" name="objetos" type="text" placeholder="Ejemplo: cat,dog,person" required className="input-cyan" />

                                <div className="flex justify-end mt-10">
                                    <button type='submit' className="button-cyan">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <p class="subtitle mt-10">DESCUBRE LAS</p>
                <h2 id="clases">Clases de objetos</h2>
                <p>Aquí van las clases jaja</p>
            </section>
        </div>
    );
}

export default Tutorial;