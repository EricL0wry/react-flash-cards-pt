import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };
    this.setView = this.setView.bind(this);
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

  saveCards(cards) {
    localStorage.setItem('flash-cards', cards);
  }

  addCard(card) {
    const newCardsArr = this.state.cards.slice();
    newCardsArr.push(card);
    this.setState({ cards: newCardsArr }, () => this.saveCards(newCardsArr));
  }

  render() {
    return (
      <div className="container">
        <Nav setView={this.setView} active={this.state.view}/>
        { this.getView()}
      </div>
    );
  }
}

export default App;
