import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className='flex justify-between w-full max-w-4xl gap-10'>
            <section className="flex justify-center mt-16 w-full h-fit">
                <div className="container flex flex-col max-w-xl p-8 border border-slate-400/50 rounded-lg bg-slate-700 duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-300/30 hover:-translate-y-2">
                    <p class="subtitle">BUSCAR</p>
                    <h2 className="text-3xl">Imágenes</h2>
                    <p className='mb-2'>Introduce el texto a buscar en Google y las clases de los objetos a identificar.</p>
                    <Link to={'/como_funciona'} className='w-fit text-gray-300 text-xs mb-8 hover:text-gray-100'>¿Cómo funciona?</Link>

                    <form action="" className="flex flex-col">
                        <label htmlFor="busqueda" className="text-sm text-slate-300 mb-1">Búsqueda:</label>
                        <input id="busqueda" name="busqueda" type="text" placeholder="¿Qué quieres buscar?" required className="input-cyan" />

                        <label htmlFor="objetos" className="text-sm text-slate-300 mb-1 mt-6">Objetos:</label>
                        <input id="objetos" name="objetos" type="text" placeholder="Ejemplo: cat,dog,person" required className="input-cyan" />

                        <div className="flex justify-end mt-10">
                            <button className="button-cyan">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="flex justify-center w-full mt-16">
                <div className="container flex flex-col max-w-xl p-8 border border-slate-400/50 rounded-lg bg-slate-700 duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-300/30 hover:-translate-y-2">
                    <p class="subtitle">BUSCAR</p>
                    <h2 className="text-3xl mb-6">Productos</h2>

                    <form action="" className="flex flex-col">
                        <label htmlFor="email" className="text-sm text-slate-300 mb-1">Correo electrónico:</label>
                        <input id="email" name="email" type="text" placeholder="ejemplo@gmail.com" required className="input-cyan" />

                        <label htmlFor="nombre" className="text-sm text-slate-300 mb-1 mt-4">Nombre:</label>
                        <input id="nombre" name="nombre" type="text" placeholder="Introduzca su nombre completo" required className="input-cyan" />

                        <label htmlFor="mensaje" className="text-sm text-slate-300 mb-1 mt-4">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" type="text" rows={5} placeholder="¿Qué es lo que desea?" required className="input-cyan"></textarea>

                        <div className="flex justify-end mt-8">
                            <button className="button-cyan">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Index;