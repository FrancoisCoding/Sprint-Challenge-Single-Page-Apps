import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard(props) {
  console.log("characterCard props", props.data);
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={props.data.image}
          alt="Rick and Morty Character"
        />
        <CardBody>
          <CardTitle>Name : {props.data.name}</CardTitle>
          <CardSubtitle>
            Gender : {props.data.gender} Species : {props.data.species}
          </CardSubtitle>
          <CardText>{props.data.status}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
