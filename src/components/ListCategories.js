import React from 'react'
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class ListCategories extends React.Component {
  render() {
    console.log("Props");
    console.log(this.props); // aqui vai parecer 'allcategories'
    
    return (
      <div className="separar categorias">

        <p>
          Escolha uma Categoria:
    </p>
        <Row>
          { this.props.allcategories.map((c) => 
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
    )
  }
}

const mapStateToProps = (state) => {
  console.log("---> State Atual", state);
    return { allcategories: state.categories.data }
}

export default connect(mapStateToProps)(ListCategories)




// class ListCategories extends React.Component {

//   render() {

//     return (
      // <div className="separar categorias">

      //   <p>
      //     Escolha uma Categoria:
      //   </p>
      //   <Row>        
      //     {/* { allcategories.map((c) => 
      //       <Col  key={c.path} >
      //         <ButtonToolbar>
      //           <Link to={c.name} >
      //             <Button variant="info" size="lg" block> {c.name} </Button>
      //           </Link>
      //         </ButtonToolbar>
      //       </Col>
      //       )} */}
      //   </Row>
      // </div>
//     );
//   }
// }


// const mapStateToProps = (state) => ({
//   allcategories: state.categories.data
// })

// console.log(categories.data)

// export default connect(mapStateToProps)(ListCategories)