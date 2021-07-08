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

    //add content to button
    createNewGridButton.textContent = 'create new grid';
    
    // add class to button to style it
    createNewGridButton.classList.add('createNewGridButton');
    
    //functionality
    createNewGridButton.addEventListener('click', () => {
        clearGrid(grid);
    });

    createNewGridButton.addEventListener('click', createNewGrid);


    //add button to the page
    document.body.insertBefore(createNewGridButton, grid);
}

function makeGrid(numSquaresPerSide) {
    // contains all the gridSquares
    grid = document.createElement('div');

    // creates all the grid squares and add them to the grid
    for (let i = 0; i < (numSquaresPerSide * numSquaresPerSide); i++) {
        //create a square
        let gridSquare = document.createElement('div');

        //
        gridSquare.classList.add('gridSquare');

        //needed to add content to get the square to "behave"
        gridSquare.textContent = `${i}`;
        
        //
        let numPasses = 0;

        //grid squares changes color when mouse passes over
        gridSquare.addEventListener("mouseenter", () => {
            numPasses += 1;
            gridSquare.classList.add('fillInSquare');
            console.log(numPasses);
            
            // extra
            /*
                each pass with mouse over the square changes it to
                completely random rgb value so each square is a random
                color
                try having each pass just add another 10% black
                so that after 10 passes the square is completely black
            */
           /*
            each square would get it's own local varible to "remember"
            how many passes have occurred

            then just set up a switch to add a class depending on the
            value of numPasses
            */
           switch (numPasses) {
               case 2:
                   gridSquare.classList.add('firstOverPass');
               break;

               case 3:
                   gridSquare.classList.replace('firstOverPass','secondOverPass');
               break;

               case 4:
                   gridSquare.classList.replace('secondOverPass','thirdOverPass');
               break;

               case 5:
                   gridSquare.classList.replace('thirdOverPass', 'fourthOverPass');
                   break;
                
               case 6:
                   gridSquare.classList.replace('fourthOverPass', 'fifthOverPass');
                   break;
                
                case 7:
                    gridSquare.classList.replace('fifthOverPass','sixthOverPass');
                    break;
                
                case 8:
                    gridSquare.classList.replace('sixthOverPass', 'seventhOverPass');
                    break;
                
                case 9:
                    gridSquare.classList.replace('seventhOverPass', 'eightOverPass');
                    break;
                
                case 10:
                    gridSquare.classList.replace('eightOverPass', 'ninthOverPass');
                    break;
                
                case 11:
                    gridSquare.classList.replace('ninthOverPass', 'tenthOverPass');
                    break;

           }


        });

        // add sqaure to the grid
        grid.appendChild(gridSquare);
    }

    //style the grid
    grid.classList.add('grid');
    //
    grid.style.gridTemplateColumns = `repeat(${numSquaresPerSide},1fr)`;
    grid.style.gridTemplateRows = `repeat(${numSquaresPerSide},1fr)`;

    // grid to the page
    //if there is a grid already present replace it
    if (document.body.querySelector('.grid') != null) {
        document.body.replaceChild(grid, document.body.querySelector('.grid'));
    } else {
        // if not add a new grid
        // add grid to the body 
        document.body.appendChild(grid);
    }
    //
    return grid;
}

function clearGrid(grid) {
grid.childNodes.forEach(element => {
    element.classList.remove('fillInSquare');
    });
}

//create a new grid based on user input
function createNewGrid() {
    //prompt users for the number of sqaures per side
    let ChosenNumberOfSquaresPerSide = prompt('how many squares per side?', 'input one number, max is 100');

    //make sure input is valid, and only proceed if input if valid 
    if(ChosenNumberOfSquaresPerSide != null){
        //convert user input from a string into a number
        let numberOfSquaresPerSide = Number(ChosenNumberOfSquaresPerSide);
        // if it can not be converted then number returns NaN
        if (numberOfSquaresPerSide != NaN) {
            //check if the number is equal to or less than 100
            // need to check for negative numbers
            if (numberOfSquaresPerSide <= 100 && numberOfSquaresPerSide > 0) {
                //call function that creates grid and store the return value into grid
                grid = makeGrid(numberOfSquaresPerSide);

            }
        }
    }
}
