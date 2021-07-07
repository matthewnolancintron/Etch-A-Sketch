/*
    todo:
    remove inline styles to a separate style sheets
    and add class/ids with js instead
 */

// 
let grid;

//listen for when the dom is ready and then call etch
document.addEventListener('DOMContentLoaded', etch);

//main function of the program
function etch() {
    // create 16x16 grid of square divs
    grid = makeGrid(16);

    //create button for creating a new grid
    const createNewGridButton = document.createElement('button');

    //add content to button and style it
    createNewGridButton.textContent = 'create new grid';
    createNewGridButton.style.marginBottom = '2%';
    
    //functionality
    createNewGridButton.addEventListener('click', () => {
        clearGrid(grid);
    });

    createNewGridButton.addEventListener('click', createNewGrid);


    //add button to the page
    document.body.insertBefore(createNewGridButton, grid);
    // extra
    /*
       each pass with mouse over the square changes it to
       completely random rgb value so each square is a random
       color

       try having each pass just add another 10% black
       so that after 10 passes the square is completely black
     */
}

function makeGrid(numSquaresPerSide) {
    // contains all the gridSquares
    let grid = document.createElement('div');

    // creates all the grid squares and add them to the grid
    for (let i = 0; i < (numSquaresPerSide * numSquaresPerSide); i++) {
        //create a square
        let gridSquare = document.createElement('div');

        //style the square
        gridSquare.style.border = 'solid black 0.1em';

        //    gridSquare.style.width = '1%';
        //    gridSquare.style.height = '1%';

        gridSquare.style.backgroundColor = 'white';

        //needed to add content to get the square to "behave"
        gridSquare.textContent = `${i}`;

        // hiding the content by setting it's color the same
        // as the background
        gridSquare.style.color = 'white';

        //
        gridSquare.style.width = `${1 / grid.style.width}%`;
        gridSquare.style.height = `${1 / grid.style.height}%`;;
        gridSquare.style.overflow = 'hidden';

        //grid squares changes color when mouse passes over
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = 'grey';
            gridSquare.style.color = 'grey';
        });

        // add sqaure to the grid
        grid.appendChild(gridSquare);
    }
    //style the grid
    grid.style.border = 'solid green 2px';
    //make grid into a grid
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${numSquaresPerSide},1fr)`;
    grid.style.gridTemplateRows = `repeat(${numSquaresPerSide},1fr)`;

    // set size of the grid
    grid.style.width = '700px';
    grid.style.height = '300px';

    // grid to the page
    //if there is a grid already present replace it
    if (document.body.querySelector('div') != null) {
        document.body.replaceChild(grid, document.body.querySelector('div'));
    } else {
        // if not add a new grid
        // add grid to the body 
        document.body.appendChild(grid);
    }

    return grid;
}

function clearGrid(grid) {
grid.childNodes.forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.color = 'white';
    });
}


//create a new grid based on user input
function createNewGrid() {
    //prompt users for the number of sqaures per side
    let ChosenNumberOfSquaresPerSide = prompt('how many squares per side?', 'input one number, max is 100');
    console.log(ChosenNumberOfSquaresPerSide);

    //make sure input is valid
    //only if input if valid
    if (ChosenNumberOfSquaresPerSide != null) {
        //convert user input from a string into a number
        let numberOfSquaresPerSide = Number(ChosenNumberOfSquaresPerSide);
        // if it can not be converted then number returns NaN
        if (numberOfSquaresPerSide != NaN) {
            //check if the number is equal to or less than 100
            // need to check for negative numbers
            if (numberOfSquaresPerSide <= 100 && numberOfSquaresPerSide > 0) {
                //call function that creates grid
                grid = makeGrid(numberOfSquaresPerSide);

            }
        }

    }
}


