const React = require('react');

class loginNav extends React.Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/"><i class='bx bxs-wallet'></i> Expense Trackerr!</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/login"><i class='bx bxs-log-in'></i> Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/newUser">Register</a>
              </li>
            </ul>
          </div>
        </nav>
        );
    };
};

module.exports = loginNav;