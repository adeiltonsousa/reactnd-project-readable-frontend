import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Moment from 'react-moment'
import like from '../static/img/like.png'
import nolike from '../static/img/nolike.png'
import { Link } from 'react-router-dom'


class InfoPost extends React.Component {

  render() {

    var post = this.props.post

    return (
      <Row className="infosPost" >
        <Col>
          <span>Autor: {post.author}</span>
        </Col>
        <Col>
          <span>Categoria: {post.category}</span>
        </Col>
        <Col>
          <Image src={like} fluid className="bt_pontos" />
          <span>Votos: {post.voteScore}</span>
          <Image src={nolike} fluid className="bt_pontos" />
        </Col>
        <Col>
          <Link to="#">
            <span>{post.commentCount} Comentários</span>
          </Link>
        </Col>
        <Col>
          <span>
            <Moment format="DD/MM/YYYY">{post.timestamp}</Moment>
          </span>
        </Col>
      </Row>
    );
  }
}

export default InfoPost