import React from 'react';

function Nav(props) {
  const { setView, active } = props;

  return (
    <nav className="navbar navbar-light bg-light justify-content-end">
      <form className="form-inline">
        <button
          type="button"
          onClick={() => setView('view-cards')}
          className={`btn ${active === 'view-cards' ? 'btn-primary' : 'btn-light text-primary'}`}>
            View Cards
        </button>
        <button
          type="button"
          onClick={() => setView('review-cards')}
          className={`ml-1 btn ${active === 'review-cards' ? 'btn-primary' : 'btn-light text-primary'}`}>
            Review
        </button>
        <button
          type="button"
          onClick={() => setView('create-card')}
          className={`ml-1 btn ${active === 'create-card' ? 'btn-primary' : 'btn-light text-primary'}`}>
            Create Card
        </button>
      </form>
    </nav>
  );

}

export default Nav;
