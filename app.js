const gameBoard = (() => {


});

const container = document.querySelector('#container')
const board = document.querySelector('#board')
const divs = document.querySelectorAll('.play');
const h2 = document.querySelector('h2')
const rButton = document.querySelector('#reset')



let tableX = ['', '', '', '', '', '', '', '', '']
const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
let counter = 0;

const newarr = [...divs]

rButton.addEventListener('click', () => {
    reset()
})


for (let i = 0; i < newarr.length; i++) {
    newarr[i].addEventListener('click', (e) => {

        let div = newarr[i]

        let index = newarr.indexOf(e.target)
        counter++


        if (counter % 2 === 1) {
            const xS = document.createElement('div');
            xS.textContent = "X"
            xS.classList.add('ofX');
            div.append(xS);
            e.target.style.pointerEvents = 'none';
            // console.log(div.dataset.number)


            tableX[index] += 'x'
            h2.textContent = 'Player O Turn'
            if (winTest(tableX, 'x') === true) {
                h2.textContent = "Player X Won"
                board.style.pointerEvents = 'none'
            }



        } else {
            (counter % 2 === 0)
            const oS = document.createElement('div')
            oS.classList.add('ofO')
            div.append(oS)
            e.target.style.pointerEvents = 'none';
            tableX[index] += 'o'
            h2.textContent = 'Player X Turn'
            if (winTest(tableX, 'o') === true) {
                h2.textContent = "Player O Won"
                board.style.pointerEvents = 'none'
            }


        }
        if (counter === 9) {
            h2.textContent = "It's a tie. Please restart the game"
            board.style.pointerEvents = 'none'
        }


    });




    function reset() {
        h2.textContent = "Player X Turn"
        counter = 0;
        tableX = ['', '', '', '', '', '', '', '', '']
        board.style.pointerEvents = 'auto';

        for (let i = 0; i < 9; i++) {
            newarr[i].textContent = '';
            newarr[i].style.pointerEvents = 'auto';

        }


    };


};


// for (let div of newarr) {




//     div.addEventListener('click', (e) => {
//         let index = newarr.indexOf(e.target)
//         counter++

//         console.log(newarr[div])
//         if (counter % 2 === 1) {
//             xS = document.createElement('div');
//             xS.textContent = "X"
//             xS.classList.add('ofX');
//             div.append(xS);
//             e.target.classList.add('delete')
//             e.target.style.pointerEvents = 'none';
//             // console.log(div.dataset.number)


//             tableX[index] += 'x'
//             h2.textContent = 'Player O Turn'
//             if (winTest(tableX, 'x') === true) {
//                 h2.textContent = "Player X Won"
//                 board.style.pointerEvents = 'none'
//             }



//         } else {
//             (counter % 2 === 0)
//             const oS = document.createElement('div')
//             oS.classList.add('ofO')
//             div.append(oS)
//             e.target.style.pointerEvents = 'none';
//             tableX[index] += 'o'
//             h2.textContent = 'Player X Turn'
//             if (winTest(tableX, 'o') === true) {
//                 h2.textContent = "Player O Won"
//                 board.style.pointerEvents = 'none'
//             }


//         }
//         if (counter === 9) {
//             h2.textContent = "It's a tie. Please restart the game"
//             board.style.pointerEvents = 'none'
//         }


//     });

//     function reset() {
//         // counter = 0;
//         while (board.firstChild) {
//             board.firstChild.remove()
//         }
//         for (let i = 0; i < 9; i++) {
//             // const newPlay = document.createElement('div')
//             // newPlay.classList.add('play')
//             board.append(div)

//         }
//         // div.textContent = '';

//         // div.removeChild(xS)
//         // div.removeChild(oS)


//         board.style.pointerEvents = 'auto';
//         div.style.pointerEvents = 'auto';
//         // const newGame = document.querySelector('div')
//         // newGame.classList.add('board')
//         // container.append(newGame)

//     };

// };




function winTest(board, side) {
    for (let i = 0; i < winConditions.length; i++) {
        let w = winConditions[i];
        let sum = 0;
        for (let j = 0; j < w.length; j++) {
            if (board[w[j]] === side) {
                sum++
            }
        }
        if (sum === 3) {
            return true
        }
    }

    return false
}

// let result = winTest(tableX, "x")

















// function playerWins(playerMark) {
//     return winConditions.some((threeInaRow) => {
//         threeInaRow.every((square => {
//             tableX[square] === playerMark
//         }))
//     })
// };

// function all(list) {
//     for (let i = 0; i < list.length; i++) {
//         if (!list[i]) {
//             return false;
//         }
//         return true;
//     }
// };

// for (let i = 0; i < winConditions.length; i++) {
//     for (let j = 0; j < winConditions[i].length; j++) {
//         if (all(winConditions[i[j]].map(index => tableX[index] === 'x'))) {
//             console.log('baby')
//         }
//     }

// }






// function allChecked(indexes) {
//     return indexes.some((index => {
//         board[index] === 'x';
//     }))
// };


// if (winConditions.some(allChecked)) {
//     console.log('hi')
// }



