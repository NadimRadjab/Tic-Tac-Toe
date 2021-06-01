
///gameBoard
const gameBoard = (() => {

    //Calling the Dom
    const board = document.querySelector('#board')
    const h2 = document.querySelector('h2');
    const rButton = document.querySelector('#reset');

    ///Table winCondtions and counter
    let table = ['', '', '', '', '', '', '', '', ''];
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
    let counter = 0;


    rButton.addEventListener('click', () => {

        reset();
    });

    /// Takes the tabel and adds a marker to it.
    const tableMarker = (marker, index) => {
        return table[index] += marker;
    };

    ///makes the board unclickable
    const boardStyle = () => {
        return board.style.pointerEvents = 'none';
    };
    const counterPlus = () => {
        return counter++;
    };

    ///Makes the Node list in to an Array so I can use all array methods
    const theTable = (arr) => {
        return newarr = [...arr];
    };



    ///Reset Function 
    function reset() {
        h2.textContent = "Player X Turn:"
        counter = 0;
        table = ['', '', '', '', '', '', '', '', '']
        board.style.pointerEvents = null;
        for (let i = 0; i < 9; i++) {
            newarr[i].textContent = '';
            newarr[i].style.pointerEvents = null;


        }


    };


    ///Test fucntion tests who wins the game.It loops over the winConditions.
    //  Then looks at the table and looks if  X or the O is equal to the index of the winning condtion.
    function winTest(board, side) {
        for (let i = 0; i < winConditions.length; i++) {
            let w = winConditions[i];
            let sum = 0;
            board = table;
            for (let j = 0; j < w.length; j++) {
                if (board[w[j]] === side) {
                    sum++;
                }
            }
            if (sum === 3) {
                return true;
            }
        }

        return false;
    };
    return {
        tableMarker,
        boardStyle,
        theTable,
        winTest: winTest
    }

})();




///How the game is played
const displayController = (() => {

    ///Selecting the elements.I have repeating variables from the upper module.
    const divs = document.querySelectorAll('.play');
    const h2 = document.querySelector('h2');
    gameBoard.theTable(divs);
    let counter = 0;


    ///Function that plays the game takes the an array.
    function play(arr) {

        ///looping the arr so I display the divs
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', (e) => {
                let div = arr[i];

                ///My index so I know where I am pressing 
                let index = arr.indexOf(e.target);
                /// adds to the counter
                counter++

                ///Game logic Player X always start the game it creates a div and add a class
                if (counter % 2 === 1) {
                    const xS = document.createElement('div');
                    xS.textContent = "X";
                    xS.classList.add('ofX');
                    div.append(xS);

                    ///disable the div I clicked, so the player cannot  click twice on it
                    e.target.style.pointerEvents = 'none';

                    gameBoard.tableMarker('x', index)
                    h2.textContent = 'Player O Turn:'

                    ///The Game if  marker matches one of the winning Conditions.Then the game is stoped and the winner is declared.
                    if (gameBoard.winTest(board, 'x') === true) {
                        counter = 0;
                        gameBoard.boardStyle();
                        h2.textContent = "Player X Wins";

                    }
                } else {
                    (counter % 2 === 0);
                    const oS = document.createElement('div');
                    oS.classList.add('ofO');
                    div.append(oS);
                    e.target.style.pointerEvents = 'none';
                    gameBoard.tableMarker('o', index);
                    h2.textContent = 'Player X Turn:';
                    if (gameBoard.winTest(board, 'o') === true) {
                        h2.textContent = "Player O Wins";
                        counter = 0;
                        gameBoard.boardStyle();
                    }


                }
                ///When the counter goes to 9 no winner is declared.Stops the Game
                if (counter === 9) {
                    counter = 0;
                    h2.textContent = "It's a draw. Please restart the game.";
                    gameBoard.boardStyle();
                }
            });

        };

    }
    play(gameBoard.theTable(divs));


    return {
        play: play
    }


})();

