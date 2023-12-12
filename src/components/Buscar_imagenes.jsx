import React, { useState } from "react";

const API = process.env.REACT_APP_API;

const Buscar_imagen = () => {
    const [imagenes, set_imagenes] = useState([]);

    const handle_submit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://711c-34-31-165-6.ngrok.io/buscar_imagenes_google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                busqueda: 'gatitos',
                clases: ['dog', 'cat']
            })
        });

        const data = await res.json();
        set_imagenes(data.imagenes);
        console.log(data.imagenes);
    }

    return (
        <>
            <h1>Buscar imagen en Google</h1>

            <form onSubmit={handle_submit}>
                <button type='submit'>Enviar petición</button>
            </form>

            {imagenes.map((imagen, index) => (
                <img key={index} src={`data:image/png;base64,${imagen}`} alt={`Imagen ${index}`} />
            ))}
        </>
    );
}

export default Buscar_imagen;