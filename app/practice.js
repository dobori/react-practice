var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// var WhatToSee = createReactClass({

//     render:function(){
//         return(
//             <div>
//                 <h1>yeeeee</h1>
//                 <p>valami</p>
//                 <p>{this.props.msg}</p>
//             </div>
//         );
//     } 

// });

// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }

class Square extends React.Component {
    render() {
        return(
            <button onClick={() => alert(this.props.value)}>{this.props.value}</button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return(
            <Square value={i} />
        )
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
              <div className="status">{status}</div>
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
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div>
                <Board />
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Game />, document.getElementById('show_stuffs'));