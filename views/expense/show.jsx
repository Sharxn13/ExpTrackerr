const React = require("react");
const Layout = require('../layout');
const Nav = require('../navi');
const moment = require('moment');

class Show extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div className="card text-white bg-dark mb-3">
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p>
          <form action={`/expenses/${expense.id}/edit`} method="GET">
            <button class='bx bxs-edit' type="submit"></button>
          </form>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <button class="bx bxs-trash" type="submit"/>
          </form>
        </div>
      );
     })
    return (
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <head />
        <body>
          <h1>Single Expense</h1>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Show;