import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component {
  /* Square is the son */
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square"
      onClick={() => this.setState({value: 'X'})}>
        { this.state.value } {/* not this state.value */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{ status }</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-borad">
          <Board />
        </div>
        <div className="game-info">
          <div>{ }</div>
          <ol>{ }</ol>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
