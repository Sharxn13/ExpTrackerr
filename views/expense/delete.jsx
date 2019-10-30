const React = require('react');
const Layout = require('../layout');
const Nav = require('../navi');

class Delete extends React.Component {
  render() {
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Expense Deleted</h1>
        </body>
      </Layout>
    );
  }
}

module.exports = Delete;