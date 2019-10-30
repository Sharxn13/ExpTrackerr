const React = require('react');
const Layout = require('../layout');
const Nav = require('../navi');
// Moment.js is a free and open source JavaScript library that removes the need to use the native JavaScript Date object directly.
const moment = require('moment');

class Create extends React.Component {
  render() {
    let data = [];
    let total_expense = this.props.result2.rows[0].sum;
    const list = this.props.result.map (expense => {
      let percent = parseFloat(expense.cat_expense) / parseFloat(total_expense) * 100;
      data.push({category : expense.category, percent : percent.toFixed(2)})
      return (
        <tr>
          <th scope="col">{expense.category}:</th>
          <td scope="col">${expense.cat_expense}</td>
        </tr>
      )
    });
    data = JSON.stringify(data);
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <div className="row col-12 myStat">
            <div className="col-2"></div>
            <div className="card text-white bg-dark mb-3 col-4">
              <h1>Expenses Summary</h1><br/>
              <p>From <b>{moment(this.props.req.body.start_date).format('ll')}</b> to <b>{moment(this.props.req.body.end_date).format('ll')}</b></p>
              <table class="table table-dark mb-3 text-white">
                {list}
                <tr>
                  <th scope="col">Total Expenses:</th>
                  <td scope="col">${this.props.result2.rows[0].sum}</td>
                </tr>
              </table>
            </div>
            <div id="chartContainer" className="col-5">
              <canvas id="myChart"  width="600" height="600"></canvas>
            </div>
          </div>
          <script dangerouslySetInnerHTML={ {__html: `let cData = ${data}`}}/>
          <script src="/script.js"></script>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;