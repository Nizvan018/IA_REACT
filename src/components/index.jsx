import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const [busqueda, set_busqueda] = useState('');
    const [objetos, set_objetos] = useState('');

    const handle_buscar_imagen = () => {
        // console.log(busqueda, objetos);
        const clases = objetos.split(',');

        if (busqueda && objetos) {
            navigate('/buscar_imagenes', { state: { busqueda, clases } });
        }
    }

    return (
        <div className='flex justify-between w-full max-w-4xl gap-10'>
            <section className="flex justify-center mt-16 w-full h-fit">
                <div className="container flex flex-col max-w-xl p-8 border border-slate-400/50 rounded-lg bg-slate-700 duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-300/30 hover:-translate-y-2">
                    <p className="subtitle">BUSCAR</p>
                    <h2 className="text-3xl">Imágenes</h2>
                    <p className='mb-2'>Introduce el texto a buscar en Google y las clases de los objetos a identificar.</p>
                    <Link to={'/como_funciona'} className='w-fit text-gray-300 text-xs mb-8 hover:text-gray-100'>¿Cómo funciona?</Link>

                    <form onSubmit={handle_buscar_imagen} className="flex flex-col">
                        <label htmlFor="busqueda" className="text-sm text-slate-300 mb-1">Búsqueda:</label>
                        <input id="busqueda" name="busqueda" onChange={e => set_busqueda(e.target.value)} value={busqueda} type="text" placeholder="¿Qué quieres buscar?" required className="input-cyan" />

                        <label htmlFor="objetos" className="text-sm text-slate-300 mb-1 mt-6">Objetos:</label>
                        <input id="objetos" name="objetos" onChange={e => set_objetos(e.target.value)} value={objetos} type="text" placeholder="Ejemplo: cat,dog,person" required className="input-cyan" />

                        <div className="flex justify-end mt-10">
                            <button type='submit' className="button-cyan">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="flex justify-center w-full mt-16 h-fit">
                <div className="container flex flex-col max-w-xl p-8 border border-slate-400/50 rounded-lg bg-slate-700 duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-300/30 hover:-translate-y-2">
                    <p className="subtitle">BUSCAR</p>
                    <h2 className="text-3xl">Productos</h2>
                    <p className='mb-2'>Introduce el enlace de la imagen para identificar el objeto y buscar productos en Google Shopping.</p>
                    <Link to={'/como_funciona'} className='w-fit text-gray-300 text-xs mb-8 hover:text-gray-100'>¿Cómo funciona?</Link>

                    <form action="" className="flex flex-col">
                        <label htmlFor="enlace" className="text-sm text-slate-300 mb-1">Enlace (URL):</label>
                        <input id="enlace" name="enlace" type="text" placeholder="https://imagen.jpg" required className="input-cyan" />

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