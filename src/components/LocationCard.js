import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function LocationCard(props) {
  if (!props.data) {
    return <h1 className="hide">Loading...</h1>;
  }
  console.log("LocationCard props", props.data);
  console.log("LocationCard props", props.data);
  return (
    <Card>
      <CardBody>
        <CardTitle>Name : {props.data.name}</CardTitle>
        <CardSubtitle>
          Type : {props.data.type} Dimension : {props.data.dimension}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
