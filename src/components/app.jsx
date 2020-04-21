import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      butts: 'butts'
    };

  }

  render() {
    return (
      <h1 className="text-center">Flash Card App</h1>
    );
  }
}

export default App;
