import React from 'react'
import { connect } from 'react-redux'
import { Form, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import {
  sendPost
} from '../action/posts'


class NewPost extends React.Component {

  state = {
    title: "",
    author: "",
    body: "",
    category: ""
  };

  handleChangeTitle = this.handleChangeTitle.bind(this);
  handleChangeAuthor = this.handleChangeAuthor.bind(this);
  handleChangeBody = this.handleChangeBody.bind(this);
  handleChangeCategory = this.handleChangeCategory.bind(this);

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeAuthor(event) {
    this.setState({
      author: event.target.value,
    });
  }

  handleChangeBody(event) {
    this.setState({
      body: event.target.value,
    });
  }

  handleChangeCategory(event) {
    this.setState({
      category: event.target.value,
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let campo_vazio = "Preencha todos os campos do formulário";

    const data = {
        id: Math.random().toString(36).substr(-8),
        timestamp: Date.now(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category,
        voteScore: 0,
        deleted: false,
        commentCount: 0,
        comments: [],
    }

    if (this.state.category!=="" & this.state.title!=="" & this.state.author!=="" & this.state.body!=="" ){
        this.props.sendPost(data)
  
    } else {
      return document.getElementById('alerta').innerHTML = campo_vazio;
    }
}

  render() {
    return (
      <Form className="separar newPost">
        <Form.Group>

          <Row>
            <Col>
              <Form.Label>Selecione uma Categoria</Form.Label>
              <Form.Control as="select" onChange={this.handleChangeCategory}>
                <option value="">...</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </Form.Control><br />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Título:</Form.Label>
              <Form.Control
                id="title"
                name="title"
                placeholder="insira um título"
                onChange={this.handleChangeTitle}
                value={this.state.title}
              />
            </Col>
            <Col>
              <Form.Label>Autor:</Form.Label>
              <Form.Control
                id="author"
                placeholder="autor"
                onChange={this.handleChangeAuthor}
                value={this.state.author}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Postagem</Form.Label>
              <Form.Control
                as="textarea" rows="8"
                id="body"
                type="text"
                onChange={this.handleChangeBody}
                value={this.state.body}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar className="separar">
                <Button variant="outline-secondary" onClick={this.handleSubmit} >Postar</Button>
                <Button variant="outline-secondary">Cancelar</Button>
              </ButtonToolbar>
              <span className="alerta" id='alerta'></span>
            </Col>
          </Row>

        </Form.Group>
      </Form>

    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { sendPost },
  dispatch,
)
  
export default connect(null, mapDispatchToProps)(NewPost);