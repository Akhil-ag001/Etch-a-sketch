let className = "";
let rows = 0;
let Cells;

const main = document.querySelector('.container');

addCells(16);

//Creating events

function removeCells(){
    const remove = document.querySelectorAll('div.row');
    remove.forEach((cells) =>{
        main.removeChild(cells);
    });

}
function addCells(rows){

    for(let i=0; i<rows; i++){
        const row = document.createElement('div');
        className = "row" + (i+1);
        row.classList.add(className);
        row.classList.add('row');
        for(let j=0; j<rows; j++){
            let cell = document.createElement('div');
            className = "cell" + (j+1);
            cell.classList.add(className);
            className = "row" + (i+1);
            cell.classList.add(className);
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        main.appendChild(row);
    }

    Cells = document.querySelectorAll('div.cell');

    const color = randColor();
    Cells.forEach((cells) =>{
        cells.addEventListener('mouseover', (e) => {
            cells.setAttribute('style', 'background-color:' + color );
        });
    })
}
//Main function


function randColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const chanSize = document.querySelector('.click-me');
chanSize.addEventListener('click', (e) =>{
    const ans = prompt("Enter the new size- ");
    rows = 0 + ans;
    removeCells();
    addCells(rows);
})


