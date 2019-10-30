const React = require('react');
const Layout = require('../layout');
const Nav = require('../navi');
const moment = require('moment');

class Create extends React.Component {
  render(){
    const list = this.props.result.map(({expense})  => {
     return (
       <div>
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p>
       </div>
     );
    })
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Expense Created</h1>
          <div className="card text-white bg-dark mb-3">
            {list}
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;