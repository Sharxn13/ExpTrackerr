const React = require("react");
const Layout = require('../layout');

class Error extends React.Component {
  render() {
    return (
      <Layout>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 "><b>ERROR 404</b></h1>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Error;