import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Moment from 'react-moment'
import like from '../static/img/like.png'
import nolike from '../static/img/nolike.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class InfoPost extends React.Component {

  render() {


    return (
      
      <Row className="infosPost" >
          {/* <Col>
            <span>Autor: {p.author}</span>
          </Col>
          <Col>
            <span>Categoria: {p.category}</span>
          </Col>
          <Col>
            <Image src={like} fluid className="bt_pontos" />
            <span>Votos: {p.voteScore}</span>
            <Image src={nolike} fluid className="bt_pontos" />
          </Col>
          <Col>
            <Link to="#">
              <span>{p.commentCount} Comentários</span>
            </Link>
          </Col>
          <Col>
            <span>
              <Moment format="DD/MM/YYYY">{p.timestamp}</Moment>
            </span>
          </Col> */}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("---> State Posts", state);
  return { allposts: state.posts.data }
}

export default connect (mapStateToProps) (InfoPost)