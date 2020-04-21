import React from 'react';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  render() {
    const card = {};
    Object.assign(this.state);
    return (
      <div>
        <h1 className="text-center">Create New Card</h1>
        <form onSubmit={() => this.props.addCard(card)}>

        </form>
      </div>
    );
  }
}

export default CreateCard;
