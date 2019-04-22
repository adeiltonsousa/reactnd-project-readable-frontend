import React from 'react'
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class ListCategories extends React.Component {

  render() {

    return (
      <div className="separar categorias">

        <p>
          Escolha uma Categoria:
        </p>
        {/* <Row>        
          {categories.map((c) => (
            <Col  key={c.path} >
              <ButtonToolbar>
                <Link to={c.name} >
                  <Button variant="info" size="lg" block> {c.name} </Button>
                </Link>
              </ButtonToolbar>
            </Col>
            ))}
        </Row> */}
      </div>
    );
  }
}

function mapStateToProps(toProps){
  return toProps
}

export default connect(mapStateToProps)(ListCategories)