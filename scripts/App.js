function Square({value, onSquareClick}) {
    return React.createElement(
        'button', 
        {className:'square', onClick: onSquareClick}, 
        value
    );
}

function Board({xIsNext, squares, onPlay}) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        React.createElement(
            React.Fragment,
            {},
            React.createElement('div',{className:'status'},status),
            React.createElement(
                'div', 
                {className: 'board-row'}, 
                React.createElement(Square,{value:squares[0], onSquareClick:() => handleClick(0)}),
                React.createElement(Square,{value:squares[1], onSquareClick:() => handleClick(1)}),
                React.createElement(Square,{value:squares[2], onSquareClick:() => handleClick(2)}),
            ),
            React.createElement(
                'div', 
                {className: 'board-row'},
                React.createElement(Square,{value:squares[3], onSquareClick:() => handleClick(3)}),
                React.createElement(Square,{value:squares[4], onSquareClick:() => handleClick(4)}),
                React.createElement(Square,{value:squares[5], onSquareClick:() => handleClick(5)}),
            ),
            React.createElement(
                'div', 
                {className: 'board-row'},
                React.createElement(Square,{value:squares[6], onSquareClick:() => handleClick(6)}),
                React.createElement(Square,{value:squares[7], onSquareClick:() => handleClick(7)}),
                React.createElement(Square,{value:squares[8], onSquareClick:() => handleClick(8)}),
            )
        )
    );
}

export default function Game() {
    const [history, setHistory] = React.useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = React.useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            React.createElement(
                'li', 
                {key: move}, 
                React.createElement('button', {onClick:() => jumpTo(move)}, description),
            )
        );
    });

    return (
        React.createElement(
            'div', 
            {className: 'game'}, 
            React.createElement(
                'div', 
                {className: 'game-board'},
                React.createElement(
                    Board, 
                    {xIsNext:xIsNext, squares:currentSquares, onPlay:handlePlay}
                )
            ),
            React.createElement(
                'div',
                {className: 'game-info'},
                React.createElement(
                    'ol',
                    {},
                    moves
                )
            )
        )
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}