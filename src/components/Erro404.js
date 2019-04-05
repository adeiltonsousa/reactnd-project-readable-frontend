import React from 'react'
import { Link } from 'react-router-dom'


class Erro404 extends React.Component {

    render() {

    return (
      <div>
        <p>
          <Link to="/">Voltar para Home</Link>
        </p>
        <p>DEU RUIM!!!!!!DEU RUIM!!!!!!DEU RUIM!!!!!! DEU RUIM!!!!!!</p>
      </div>
    );
  }
}

export default Erro404