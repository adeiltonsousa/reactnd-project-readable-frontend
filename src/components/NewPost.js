import React from 'react'
import { Form, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';


class NewPost extends React.Component {

  render() {

    return (
      <Form className="separar newPost">
        <Form.Group controlId="formGroupPost">

          <Row>
            <Col>
              <Form.Label>Título:</Form.Label>
              <Form.Control type="text" placeholder="título" />
            </Col>
            <Col>
              <Form.Label>Autor:</Form.Label>
              <Form.Control type="text" placeholder="autor" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Postagem</Form.Label>
              <Form.Control as="textarea" rows="8" />
            </Col>      
          </Row>
          <Row>
            <Col>
              <ButtonToolbar className="separar">
                <Button variant="outline-secondary" >Postar</Button>
                <Button variant="outline-secondary">Cancelar</Button>
              </ButtonToolbar>
            </Col>
          </Row>

        </Form.Group>
      </Form>
    );
  }
}

export default NewPost