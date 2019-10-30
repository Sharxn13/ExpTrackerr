const React = require('react');
const Layout = require('../layout');
const Nav = require('../navi');

class Edit extends React.Component {
  render() {
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Edit Expense</h1>
          <div className="card text-white bg-dark mb-3">
            <form action={`/expenses/${this.props.req.params.id}?_method=put`} method="POST">
              <p>Category</p>
              <select type="text" name="category" defaultValue={this.props.result[0].category}>
                <option value="Entertainment">Entertainment</option>
                <option value="Transport">Transport</option>
                <option value="Food">Food</option>
                <option value="Drinks">Drinks</option>
                <option value="Ultilities">Ultitilies</option>
                <option value="Clothes">Clothes</option>
                <option value="Others">Others</option>
              </select><br/><br/>
              <p>Date</p>
              <input type="date" name="date" defaultValue={this.props.result[0].date}/><br/><br/>
              <p>Amount</p>
              <input type="text" name="amount" defaultValue={this.props.result[0].amount}/><br/><br/>
              <p>Message</p>
              <input type="text" name="message" defaultValue={this.props.result[0].message}/><br/><br/>
              <input class="btn btn-secondary" type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </Layout>
    );
  }
}

module.exports = Edit;