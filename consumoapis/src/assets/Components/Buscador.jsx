import React, { useState, useEffect } from "react";

const Buscador = ({ personajes, filtrarPersonajes }) => {
  const [criterio, setCriterio] = useState("");

  useEffect(() => {
    setCriterio("");
  }, []);

  return (
    <div className="botones">
      <input
        type="text"
        placeholder="Criterio de búsqueda"
        onChange={(e) => setCriterio(e.target.value)}
      />
      <button onClick={() => filtrarPersonajes(criterio)}>Filtrar</button>
    </div>
  );
};

export default Buscador;
