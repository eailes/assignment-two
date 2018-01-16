import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import CharBox from './components/CharBox';

class App extends Component {
  state = {
    inputString: '',
  };

  inputChangeHandler = event => {
    this.setState({
      inputString: event.target.value,
    });
  };

  deleteCharBoxHandler = index => {
    const text = this.state.inputString.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ inputString: updatedText });
  };

  updateArrayHandler = event => {};

  render() {
    const listChar = this.state.inputString.split('').map((char, i) => {
      return (
        <CharBox
          char={char}
          key={i}
          clicked={() => this.deleteCharBoxHandler(i)}
        />
      );
    });

    return (
      <div className="App">
        <ol className="instructions">
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />

        <input
          onChange={this.inputChangeHandler}
          value={this.state.inputString}
          type="text"
        />
        <p>Input Length: {this.state.inputString.length}</p>
        <Validation length={this.state.inputString.length} />
        {listChar}
      </div>
    );
  }
}

export default App;
