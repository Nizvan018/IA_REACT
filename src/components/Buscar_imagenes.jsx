import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

// const API = process.env.REACT_APP_API;

const Buscar_imagen = () => {
    const location = useLocation();
    const { busqueda, clases } = location.state || {};
    const [imagenes, set_imagenes] = useState([]);

    useEffect(() => {
        const fetch_data = async () => {
            const res = await fetch(`http://dbd6-34-125-21-201.ngrok.io/buscar_imagenes_google`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    busqueda: busqueda,
                    clases: clases
                })
            });

            const data = await res.json();
            set_imagenes(data.imagenes);
            // console.log(data.imagenes);
        }

        fetch_data();
    }, [busqueda, clases]);

    return (
        <div className='w-full max-w-4xl'>
            <h1>Restultados</h1>
            {imagenes.length > 0 ?
                <p className="mb-10">Imágenes coincidentes con tu búsqueda</p>
                :
                <p className="mb-10">Cargando...</p>
            }

            <div className="grid grid-cols-3 gap-6">
                {imagenes.length > 0 ?
                    (imagenes && imagenes.map((imagen, index) => (
                        <div className="flex flex-col p-4 border border-slate-400/50 rounded-lg bg-slate-700 duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl hover:border-cyan-300/30 hover:-translate-y-2">
                            <img key={index} src={`data:image/png;base64,${imagen.img}`} alt={`Imagen ${index}`} className="rounded-lg" />
                            <p className="mt-4">{imagen.texto}</p>
                        </div>
                    ))) : (
                        ([0, 1, 2, 3, 4, 5].map(num => (
                            <div className="flex flex-col p-4 border border-slate-400/50 rounded-lg bg-slate-700 duration-500 animate-pulse">
                                <div className="bg-slate-600 rounded-lg" style={{ height: '230px' }}></div>
                                <p className="bg-slate-600 text-slate-600 mt-4 rounded-xl">a</p>
                            </div>
                        )))
                    )
                }
            </div>
        </div>
    );
}

export default Buscar_imagen;