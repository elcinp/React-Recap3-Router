import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Container className="text-center mt-4" style={{ height:"500px"}}>
        <Row className="d-flex justify-content-center">
          {data.map((course) => {
            return (
              <Col
                className="mb-3 d-flex justify-content-center"
                key={course.id}
                xs={12}
                md={6}
                lg={4}
              >
                <MyCard course={course} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
