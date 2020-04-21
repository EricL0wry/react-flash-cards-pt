import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    };
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  setView(view) {
    this.setState({ view });
  }

  render() {
    return (
      <h1 className="text-center">Flash Card App</h1>
    );
  }
}

export default App;
