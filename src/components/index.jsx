import React, { useState } from 'react';

const API = process.env.REACT_APP_API;

const Index = () => {
    const [imagenes, set_imagenes] = useState([]);

    const handle_submit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://1ad9-35-222-77-73.ngrok.io/buscar_imagenes_google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                busqueda: 'perritos',
                clases: ['dog', 'cat']
            })
        });

        const data = await res.json();
        set_imagenes(data.imagenes);
        console.log(data.imagenes);
    }

    return (
        <>
            <h1>Hola mundo</h1>

            <form onSubmit={handle_submit}>
                <button type='submit'>Enviar petición</button>
                {imagenes.map((imagen, index) => (
                    <img key={index} src={`data:image/png;base64,${imagen}`} alt={`Imagen ${index}`} />
                ))}
            </form>
        </>
    );
}

export default Index;