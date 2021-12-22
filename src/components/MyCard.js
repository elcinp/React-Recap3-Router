import React from "react";
import {Card,Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"

const MyCard = (props) => {
  const navigate = useNavigate()
  const {id,img,link,text,name} = props.course
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary" onClick={()=> navigate(`/${link}`)}>Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
