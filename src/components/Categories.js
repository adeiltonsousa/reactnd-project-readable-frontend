import React from 'react'
import { Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';



class Categories extends React.Component {

  render() {

    return (
      <div className="separar categorias">
        <Row>
          <Col>
            <DropdownButton id="dropdown-Secondary-button" title="Escolha uma Categoria">
              <Dropdown.Item href="#/action-1">Categoria 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Categoria 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Categoria 3</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <p>
              Você está na Categoria: <strong>Nome Categoria</strong> 
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Categories