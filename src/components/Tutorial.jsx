import React from "react";
import { Link } from "react-router-dom";

const Tutorial = () => {
    return (
        <div className='w-full max-w-4xl'>
            <h1>¿Cómo funciona <span className="text-cyan-500 font-semibold">YOLO</span>Find?</h1>
            <p className="mt-4">A continuación encontrarás una breve explicación del funcionamiento de <span className="text-gray-300 font-medium">YOLOFind</span>, para que puedas utilizar correctamente las dos opciones disponibles, y realizar búsquedas satisfactorias con tus imágenes.</p>

            {/** Sección de explicación de imágenes */}
            <section id="imagenes">
                <p class="subtitle mt-10">TUTORIAL PARA</p>
                <h2>Buscar imágenes</h2>
                <p>La primera opción disponible en nuestro sistema es <span className="text-gray-300 font-medium">Buscar imágenes</span>, aquí podrás ingresar un texto a buscar en Google y las <a href='#clases' className="text-gray-300 font-medium">Clases de objetos</a> a identificar. </p>
                <div className="flex flex-col justify-between mt-8 gap-10 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <p className="mb-6">En la tarjeta del formulario para las imágenes, existen dos campos a rellenar:</p>
                        <h3>Búsqueda:</h3>
                        <p className="mb-6">Aquí debes introducir el texto que deseas buscar en Google, como por ejemplo: Perro salchicha con chaleco amarillo.</p>
                        <h3>Objetos:</h3>
                        <p>Aquí debes introducir el nombre de las <a href="#clases">Clases de objetos</a> que deseas que YOLOv7 indentifique de la imagen.</p>
                    </div>
                    <div className="flex justify-center w-full md:w-1/2">
                        <div className="container flex flex-col max-w-lg p-8 border border-cyan-500/30 rounded-lg bg-slate-700 duration-500 shadow-cyan-500/20 shadow-2xl">
                            <p className="subtitle">BUSCAR</p>
                            <h2 className="text-3xl">Imágenes</h2>
                            <p className='mb-2'>Introduce el texto a buscar en Google y las clases de los objetos a identificar.</p>
                            <p className='w-fit text-gray-300 text-xs mb-8 font-semibold'>¿Cómo funciona?</p>

                            <div className="flex flex-col">
                                <label htmlFor="busqueda" className="text-sm text-slate-300 mb-1">Búsqueda:</label>
                                <input id="busqueda" name="busqueda" type="text" placeholder="¿Qué quieres buscar?" required className="input-cyan" disabled />

                                <label htmlFor="objetos" className="text-sm text-slate-300 mb-1 mt-6">Objetos:</label>
                                <input id="objetos" name="objetos" type="text" placeholder="Ejemplo: cat,dog,person" required className="input-cyan" disabled />

                                <div className="flex justify-end mt-10">
                                    <button className="py-2 px-4 rounded-lg font-semibold border border-cyan-500/60 bg-cyan-500/30 duration-300" disabled>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** Sección de explicación de productos */}
            <section id="productos">
                <p className="subtitle mt-10">TUTORIAL PARA</p>
                <h2>Buscar productos</h2>
                <p>La segunda opción disponible en nuestro sistema es <span className="font-semibold text-gray-200">Buscar productos</span>, con esta herramienta podrás ingresar el enlace de una imagen, para identificar los objetos en ella y buscar productos relacionados en Google Shopping.</p>
                <div className="flex flex-col justify-between mt-8 gap-10 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <p className="mb-6">En la tarjeta del formulario para las imágenes, existen dos campos a rellenar:</p>
                        <h3>Enlace (URL):</h3>
                        <p className="mb-6">Aquí debes introducir el URL de la imagen que deseas procesar.</p>
                    </div>
                    <div className="flex justify-center w-full md:w-1/2">
                        <div className="container flex flex-col max-w-lg p-8 border border-cyan-300/30 rounded-lg bg-slate-700 shadow-cyan-500/20 shadow-2xl">
                            <p className="subtitle">BUSCAR</p>
                            <h2 className="text-3xl">Productos</h2>
                            <p className='mb-2'>Introduce el enlace de la imagen para identificar el objeto y buscar productos en Google Shopping.</p>
                            <p className='w-fit text-gray-300 text-xs font-semibold mb-8'>¿Cómo funciona?</p>

                            <div action="" className="flex flex-col">
                                <label htmlFor="enlace" className="text-sm text-slate-300 mb-1">Enlace (URL):</label>
                                <input id="enlace" name="enlace" type="text" placeholder="https://imagen.jpg" required className="input-cyan" disabled />

                                <div className="flex justify-end mt-8">
                                    <button className="@apply py-2 px-4 rounded-lg font-semibold border border-cyan-500/60 bg-cyan-500/30" disabled>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** Sección de explicación de clases */}
            <section id="clases">
                <p class="subtitle mt-10">DESCUBRE LAS</p>
                <h2>Clases de objetos</h2>
                <p>Aquí van las clases jaja</p>
            </section>
        </div>
    );
}

export default Tutorial;