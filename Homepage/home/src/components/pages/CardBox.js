// CardBox.js
import React from "react";
import { Card } from "react-bootstrap"; 

function CardBox({ title, imageSrc }) {
  return (
    <Card className="card-box">
      <Card.Img variant="top" src={imageSrc}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardBox;
