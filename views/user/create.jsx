const React = require('react');
const Layout = require('../layout');
const NavLogin= require('../loginNav');

class Create extends React.Component {
  render(){
    return(
      <Layout>
        <loginNav>
        </loginNav>
        <body>
          <h1>Account created</h1>
          <div className="card text-white bg-dark mb-3">
            <p>Username: {this.props.req.body.username} </p>
            <p>Password: {this.props.req.body.password}</p>
            <p>Name: {this.props.req.body.name}</p>
            <p>Email: {this.props.req.body.email}</p>
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;