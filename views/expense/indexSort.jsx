const React = require("react");
const Layout = require('../layout');
const Nav = require('../navi');
const moment = require('moment');

class Index extends React.Component {
  render() {
    const jumbopic = 'background.jpeg';
        const jumbo = {
            backgroundImage: `url(${jumbopic})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat'
        }
    const list = this.props.result.map(expense  => {
      return (
        <tr>
        <td scope="col" class="sort">{expense.category}</td>
        <td scope="col" class="sort">{moment(expense.date).format('ll')}</td>
        <td scope="col" class="sort">{expense.amount}</td>
        <td scope="col">{expense.message.length < 30 ? expense.message : expense.message.substring(0,30)+"..."}</td>
        <td scope="col">
          <form action={`/expenses/${expense.id}`} method="GET">
            <button class='bx bxs-show' type="submit"></button>
          </form>
          <form action={`/expenses/${expense.id}/edit`} method="GET">
            <button class='bx bxs-edit' type="submit"></button>
          </form>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <button class="bx bxs-trash" type="submit"></button>
          </form>
        </td>
      </tr>
      );
     })
    return (
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <div class="jumbotron jumbotron-fluid" style={jumbo}>
            <div class="container">
              <h1 class="display-4 "><b>Welcome {this.props.req.cookies.username.toUpperCase()}</b></h1>
            </div>
          </div>
          <div class="container">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Category
                    <form action='/' method="POST">
                      <input type="hidden" name="sortType" value="category"/>
                      <input type="hidden" name="sortOrder" value="asc"/>
                      <button class='bx bx-up-arrow-alt' type="submit"></button>
                    </form>
                    <form action='/' method="POST">
                      <input type="hidden" name="sortType" value="category"/>
                      <input type="hidden" name="sortOrder" value="desc"/>
                      <button class='bx bx-down-arrow-alt' type="submit"></button>
                    </form>
                  </th>
                  <th scope="col">Date
                    <form action='/' method="POST">
                      <input type="hidden" name="sortType" value="date"/>
                      <input type="hidden" name="sortOrder" value="asc"/>
                      <button class='bx bx-up-arrow-alt' type="submit"></button>
                    </form>
                    <form action='/' method="POST">
                      <input type="hidden" name="sortType" value="date"/>
                      <input type="hidden" name="sortOrder" value="desc"/>
                      <button class='bx bx-down-arrow-alt' type="submit"></button>
                    </form>
                  </th>
                  <th scope="col">Amount
                    <form action='/' method="POST">
                      <input type="hidden" name="sortType" value="amount"/>
                      <input type="hidden" name="sortOrder" value="asc"/>
                      <button class='bx bx-up-arrow-alt' type="submit"></button>
                    </form>
                    <form action='/' method="POST">
                      <input type="hidden" name="sortType" value="amount"/>
                      <input type="hidden" name="sortOrder" value="desc"/>
                      <button class='bx bx-down-arrow-alt' type="submit"></button>
                      </form>
                  </th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {list}
              </tbody>
            </table>
          </div>
        </body>
      </Layout>
    );
  }
}

module.exports = Index;