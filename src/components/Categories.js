import React from 'react'
import { Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import { clickButton } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'


class Categories extends React.Component {

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
        <Row>
        <Link to="/post">Ir para Post</Link>         
          <Col> 
            <DropdownButton id="dropdown-Secondary-button" title="Escolha uma Categoria">
            { this.props.categorias.map((c) =>
              <Dropdown.Item key={c.path} onChange={this.inputChange} value={this.inputValue}    >
              {c.name}
              </Dropdown.Item>
            )}
            </DropdownButton>
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
        </Row>
      </div>
    );
  }
}


const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Categories)