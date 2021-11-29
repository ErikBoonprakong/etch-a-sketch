let g = 16
let table = document.getElementById('htmlTable')

function makeGrid(g){    
    let i = 0
    for (i = 0; i < g; i++){
        table = document.getElementById('htmlTable')
        let myRow = document.createElement('tr');
        myRow.id = "row" + i;
        table.appendChild(myRow)
        let theRow = document.getElementById('row' + i)
        for (let j = 0; j < g; j++){
            let myCell = document.createElement('td')
            theRow.appendChild(myCell)
            myCell.addEventListener("mouseover", function(e){e.target.classList.add('hovered')})
        }
    }
}

function newGrid(g){
    table.remove();
    let newTable = document.createElement('table') ;
    let container = document.getElementById('container');
    newTable.id = 'htmlTable' 
    container.appendChild(newTable)  
    g = window.prompt('Enter number of rows or columns:');
    makeGrid(g)
}

window.onload = makeGrid(g)