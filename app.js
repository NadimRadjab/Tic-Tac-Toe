const gameBoard = (() => {


});



const divs = document.querySelectorAll('.play');
const tableX = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const tableO = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let counter = 0;

const newarr = [...divs]
console.log()

for (let div of newarr) {
    div.addEventListener('click', (e) => {
        let dataNumber = parseInt(div.dataset.number)
        let index = newarr.indexOf(e.target)
        counter++
        if (counter % 2 === 1) {
            const xS = document.createElement('div');
            xS.textContent = "X"
            xS.classList.add('ofX');
            div.append(xS);
            e.target.style.pointerEvents = 'none';
            // console.log(div.dataset.number)

            tableX[index] += dataNumber

            // for (let i = 0; i < 3; i++) {
            //     let rowSum = 0;
            //     for (let j = 0; j < 3; j++) {
            //         console.log(parseInt(rowSum += newarr[i][j]))
            //     }
            // }



        } else {
            (counter % 2 === 0)
            const oS = document.createElement('div')
            oS.classList.add('ofO')
            div.append(oS)
            e.target.style.pointerEvents = 'none';
            tableO[index] += dataNumber
            // console.log(div.dataset.number)
        }

    });

};


const final = tableX.reduce((a, b) => a + b, 0)
console.log(final)












function GameIsover(player) {

}
// for (let i = 0; i < divs.length; i++) {
//     console.log([i])
// }