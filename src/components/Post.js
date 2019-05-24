import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import Moment from 'react-moment'
import like from '../static/img/like.png'
import nolike from '../static/img/nolike.png'
import { ListGroup } from 'react-bootstrap'
import * as PostsAPI from '../PostsAPI';
import {
  votePost,
  singlePostAc
} from '../action';


class Post extends React.Component {

  
  votePostHandler = (id, voteType) => this.props.dispatch(votePost(id, voteType))

  render() {

    return (
      <div>
        <ListGroup key={this.props.p.id} variant="flush" className="posts separar">
          <Link to={`/${this.props.p.category}/${this.props.p.id}`}>
            <ListGroup.Item variant="secondary">   {this.props.p.title}  </ListGroup.Item>
          </Link>
          <ListGroup.Item>   {this.props.p.body}  </ListGroup.Item>

          <Row className="infosPost" >
            <Col>
              <span>Autor: {this.props.p.author}</span>
            </Col>
            <Col>
              <span>Categoria: {this.props.p.category}</span>
            </Col>
            <Col>
              <Image src={like} fluid className="bt_pontos" onClick={() => this.votePostHandler(this.props.p.id, 'upVote')} />
              <span>Votos: {this.props.p.voteScore}</span>
              <Image src={nolike} fluid className="bt_pontos" onClick={() => this.votePostHandler(this.props.p.id, 'downVote')} />
            </Col>
            <Col>
              <Link to="#">
                <span>{this.props.commentCount} Comentários</span>
              </Link>
            </Col>
            <Col>
              <span>
                <Moment format="DD/MM/YYYY">{this.props.p.timestamp}</Moment>
              </span>
            </Col>
          </Row>
        </ListGroup>

      </div>
    );
  }
}

export default connect(undefined)(Post)
