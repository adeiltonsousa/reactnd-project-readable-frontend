import React from 'react'
import { Row, Col, ButtonToolbar, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleListCategories } from '../action/categories'
import {
  handleInitialData
} from '../action/shared'

class ListCategories extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData(handleListCategories))
  }

  render() {

    return (
      <div className="separar categorias">

        <p>
          Escolha uma Categoria:
        </p>
        <Row>        
        { this.props.categories.map((c) =>
          <Col  key={c.path} >
            <ButtonToolbar>
              <Link to={c.name} >
                <Button variant="info" size="lg" block> {c.name} </Button>
              </Link>
            </ButtonToolbar>
          </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default connect((state) => ({
    categories: state.categories
}))(ListCategories)