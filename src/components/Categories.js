import React from 'react'
import { Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';



class Categories extends React.Component {

  render() {
    return (
      <div className="separar categorias">
        <Row>
       
          <Col> 
            <DropdownButton id="dropdown-Secondary-button" title="Escolha uma Categoria">
            { this.props.categorias.map((c) =>
              <Dropdown.Item key={c.path} href="{ c.path }">
              { c.name }
              </Dropdown.Item>
            )}
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