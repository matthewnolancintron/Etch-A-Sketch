//listner for when the dom is ready and the call etch
document.addEventListener('DOMContentLoaded', etch);

//main function of the program
function etch(){
    // create 16x16 grid of square divs

    // contains all the gridSquares
    const grid = document.createElement('div');

    // creates all the grid squares and add them to the grid
    for(let i = 0; i < (16*16); i++){
        //create a square
        let gridSquare = document.createElement('div');

        //style the square
        gridSquare.style.border = 'solid black 1px';

        gridSquare.style.backgroundColor = 'blue';

        //needed to add content to get the square to "behave"
        gridSquare.textContent = `${i}`;

        // hiding the content by setting it's color the same
        // as the background
        gridSquare.style.color = 'blue';

        // add sqaure to the grid
        grid.appendChild(gridSquare);
    }

    // add grid to the body
    document.body.appendChild(grid);

    //use css to shape divs in div container into grid
    //flex or css grid

    //make grid into a grid
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(16,1fr)';
    grid.style.gridTemplateRows = 'repeat(16,1fr)';

    
}

