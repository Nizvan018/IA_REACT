import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const API = process.env.REACT_APP_API;

const Buscar_productos = () => {
    const location = useLocation();
    const { enlace } = useMemo(() => location.state || {}, [location.state]);
    const [urls, set_urls] = useState([]);

    useEffect(() => {
        const fetch_data = async () => {
            // console.log(enlace);
            const res = await fetch(`${API}/buscar_productos_shopping`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    enlace: enlace
                })
            });

            const data = await res.json();
            set_urls(data.enlaces)
        }

        // fetch_data();
    }, [enlace]);

    return (
        <div className="w-full max-w-4xl">
            <h1>Resultados</h1>
            {urls.length > 0 ?
                <p className="mb-10">Links de los productos coincidentes con la imagen:</p>
                :
                <p className="mb-10">Cargando...</p>
            }

            {urls.length > 0 ?
                (urls && urls.map((url, index) => (
                    <div></div>
                )))
                :
                (
                    <div>

                    </div>
                )
            }
        </div>
    );
}

export default Buscar_productos;