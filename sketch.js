let housing;
let rightKnob;
let leftKnob;

let grid;

//listen for when the dom is ready and then call etch
document.addEventListener('DOMContentLoaded', etch);

//main function of the program
function etch() {
    // create housing
    housing = makeHousing();

    //create knobs
    rightKnob = makeKnob('right');
    leftKnob = makeKnob('left');

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
    document.body.insertBefore(createNewGridButton, housing);

    //add knobs to container for styling
    //then add container holding the knobs to the housing
    let knobContainer = document.createElement('div');
    knobContainer.classList.add('knobContainer')

    knobContainer.appendChild(leftKnob);
    knobContainer.appendChild(rightKnob);

    housing.appendChild(knobContainer);
}

function makeHousing() {
    let housing = document.createElement('div');
    housing.classList.add('case');
    document.body.appendChild(housing);
    return housing

}

function makeKnob(direction) {
    console.log(`${direction}`);
    
    let knob = document.createElement('div');
    knob.classList.add('knob');

    if(direction == 'left'){
        //
        knob.classList.add('leftKnob');
    }

    if(direction == 'right'){
        //
        knob.classList.add('rightKnob');
    }

    return knob;
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
        
        //
        let numPasses = 0;
        let randomHue;
        //grid squares changes color when mouse passes over
        gridSquare.addEventListener("mouseenter", () => {
            //keeps track of the number of times user passed of "this" square
            numPasses += 1;

           switch (numPasses) {
               case 1:
                   randomHue = Math.floor(Math.random() * (300 - 0));
                   gridSquare.style.backgroundColor = `hsl(${randomHue},100%,50%)`;
                   gridSquare.style.color = `hsl(${randomHue},100%,50%)`;

                   break;
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


    /*
    animate knobs based on the mouse x and mouse y when it's on the grid/display
    when user mouse moves in the x direction knob on the left or righ should roate
    simulating a real etch-a-sketch
    update grid class to display and update js to match
    */
    grid.addEventListener('mouseover', (event) => {
        console.log(`clientX: ${event.clientX%360}`);
       // console.log(`clientY: ${event.clientY%360}`);
        leftKnobRotation = event.clientX % 360;
        rightKnobRotation = event.clientY % 360;

        leftKnob.style.transform = `rotate(${leftKnobRotation/4}deg)`;

        rightKnob.style.transform = `rotate(${rightKnobRotation/2}deg)`;
        
    });

    // grid to the page
    //if there is a grid already present replace it
    if (housing.querySelector('.grid') != null) {
        housing.replaceChild(grid, housing.querySelector('.grid'));
    } else {
        // if not add a new grid
        // add grid to the body 
        housing.appendChild(grid);
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
