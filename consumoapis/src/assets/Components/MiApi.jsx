import React, { useState } from "react";
import { Card } from "react-bootstrap";

const MiApi = ({ personaje }) => {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img
        className="imagenPersonaje"
        variant="top"
        src={personaje.imagen}
      />
      <Card.Body>
        <Card.Title className="nombrePersonaje">{personaje.nombre}</Card.Title>
        <Card.Text className="historiaPersonaje">
          {personaje.historia}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MiApi;
