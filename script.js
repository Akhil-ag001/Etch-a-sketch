let className = "";
const main = document.querySelector('.container');

for(let i=0; i<16; i++){
    const row = document.createElement('div');
    className = "row" + (i+1);
    row.classList.add(className);
    row.classList.add('row');
    for(let j=0; j<16; j++){
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