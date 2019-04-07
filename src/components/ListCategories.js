import React from 'react'
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from '../action/fieldActions'



class ListCategories extends React.Component {

  render() {

    return (
      <div className="separar categorias">
        <span>
          <label>{ this.props.value }</label><br />
          <input onChange={ this.props.changeValue } value={ this.props.value }/>
        </span>



        <p>
          Escolha uma Categoriaa:
        </p>
        <Row>        
        { this.props.categorias.map((c) =>
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

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListCategories)