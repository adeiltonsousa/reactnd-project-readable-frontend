import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { listPosts } from '../action/posts';
import * as PostsAPI from '../PostsAPI';
import { connect } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap'
import Moment from 'react-moment'
import like from '../static/img/like.png'
import nolike from '../static/img/nolike.png'


class BodyPost extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    PostsAPI.getPosts()
      .then(posts => {
        this.props.dispatch(listPosts(posts));

        this.setState({ loading: false })
      })
  }

  render() {

    if (this.state.loading) return <div>Loading...</div>

    return (
      <div>
        {this.props.allposts.map((p) =>
          <ListGroup key={p.id} variant="flush" className="posts separar">
            <Link to={`/${p.category}/${p.id}`}>
              <ListGroup.Item variant="secondary">   {p.title}  </ListGroup.Item>
            </Link>
            <ListGroup.Item>   {p.body}  </ListGroup.Item>

            <Row className="infosPost" >
              <Col>
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
              </Col>
            </Row>

          </ListGroup>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("---> State Posts", state);
  return { allposts: state.posts.data }
}

export default connect(mapStateToProps)(BodyPost)