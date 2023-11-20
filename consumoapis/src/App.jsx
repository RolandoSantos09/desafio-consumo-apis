import React, { useState } from "react";
import MiApi from "./assets/Components/MiApi";
import Buscador from "./assets/Components/Buscador";

const App = () => {
  const [personajes, setPersonajes] = useState([]);

  // Consumimos la API
  const obtenerPersonajes = async () => {
    try {
      const response = await fetch(
        "https://apisimpsons.fly.dev/api/personajes?limit=635&page=1"
      );
      const data = await response.json();
      console.log("Datos de la API:", data);
      setPersonajes(data.docs || []); // Cambiar a data.docs si esa es la estructura correcta
    } catch (error) {
      console.error("Error al obtener personajes:", error);
    }
  };

  // Ordenamos los personajes
  const ordenarPersonajes = () => {
    const sortedPersonajes = [...personajes];
    sortedPersonajes.sort((a, b) => a.Nombre.localeCompare(b.Nombre)); // Ajustar las propiedades según la estructura correcta
    setPersonajes(sortedPersonajes);
  };

  // Filtramos los personajes
  const filtrarPersonajes = (criterio) => {
    const filteredPersonajes = personajes.filter((personaje) =>
      personaje.Nombre.toLowerCase().includes(criterio.toLowerCase())
    ); // Ajustar las propiedades según la estructura correcta
    setPersonajes(filteredPersonajes);
  };

  return (
    <div>
      <div className="titulo">
        <h1>Personajes de Los Simpson</h1>
      </div>
      <div>
        <button onClick={obtenerPersonajes}>Mostrar Personajes</button>
        <button onClick={ordenarPersonajes}>Ordena Alfabéticamente</button>
      </div>
      <div className="filtro">
        <Buscador
          personajes={personajes}
          filtrarPersonajes={filtrarPersonajes}
        />
      </div>
      <div className="container">
        {personajes.length > 0 &&
          personajes.map((personaje, index) => (
            <MiApi
              key={index}
              personaje={{
                nombre: personaje.Nombre,
                imagen: personaje.Imagen,
                historia: personaje.Historia,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
