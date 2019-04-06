import React from 'react'
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
import { clickButton } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'


class ListCategories extends React.Component {

  state = {
    inputValue: ''
  }
  
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

    const { 
      clickButton,
      newValue,
    } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="separar categorias">
        <p>
          Escolha uma Categoria:
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
        
        
        
        {/* <Row>
          <Col> 
            <input
              onChange={this.inputChange} 
              type='text'
              value={inputValue}        
            />
            <button onClick={() => clickButton(inputValue)}>
              Click me!
            </button>
          </Col>
          <Col>
            <p>
              Você está na Categoria: <strong>{newValue}</strong> 
            </p>
          </Col>
        </Row> */}
      </div>
    );
  }
}


const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (ListCategories)