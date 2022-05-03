/*Generate grid of pattern cells based on values in rows and columns divs, 
add event listenters to each cell,
change color of cell when clicked.
*/

const rows = document.getElementById('rows');
const cols = document.getElementById('cols');
const submit = document.getElementById('submit');
const container = document.getElementById('gridofcells');
const colors = {1: "#ff0000", 2: "#00ff00", 3: "#0000ff"}//, 4: "#ffff00", "color5": "#00ffff", "color6": "#ff00ff"};

submit.addEventListener("click", reFlowGrid);


function reFlowGrid() {
    /*create grid of elements based on values in rows and columns divs,*/
    container.innerHTML = "";
    let row = rows.value;
    let col = cols.value;
    for (let i = 0; i < row; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.setAttribute('id', 'row' + i);
        container.appendChild(rowDiv);
        for (let j = 0; j < col; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('id', 'cell' + i + j);
            cell.setAttribute('color', 1)
            cell.style.backgroundColor = colors[1];
            cell.addEventListener("click", changeColor);
            cell.addEventListener("mouseover", changeColor);
            rowDiv.appendChild(cell);
        }
    }
    /*add event listenters to each cell,*/
}


function changeColor(e) {
    /*change color of cell when clicked or mouseover with button down
    */
   console.log(e, e.buttons);
    if ((e.buttons === 1 && e.type == "mouseover") || e.type == "click") {
        let cell = e.target;
        let colorNumber = Number(cell.getAttribute('color'));
        colorNumber++;
        if (colorNumber > 3) {
            colorNumber = 1;
        }
        cell.setAttribute('color', colorNumber);

        cell.style.backgroundColor = colors[colorNumber];
        }
}