import React from 'react';

class Nav extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-end">
        <form className="form-inline">
          <button type="button" className="btn btn-primary">View Cards</button>
          <button type="button" className="btn btn-light text-primary">View Cards</button>
          <button type="button" className="btn btn-light text-primary">View Cards</button>
        </form>
      </nav>
    );
  }
}

export default Nav;
