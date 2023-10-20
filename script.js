const blackButton = document.querySelector('.black');
const blueToBlackButton = document.querySelector('.blue-to-black');
const rainbowButton = document.querySelector('.rainbow');
const darkerRainbowButton = document.querySelector('.darker-rainbow');

blackButton.addEventListener('click', () => {
    generateGrid()

    divs.forEach(div => {
        div.addEventListener('mouseover', blackDiv)
    });
}
)

blueToBlackButton.addEventListener('click', () => {
    generateGrid()

    divs.forEach(div => {
        div.addEventListener('mouseover', blackDivGradual)
    });
}
)

rainbowButton.addEventListener('click', () => {
    generateGrid()

    divs.forEach(div => {
        div.addEventListener('mouseover', rainbowDiv)
    });
}
)

darkerRainbowButton.addEventListener('click', () => {
    generateGrid()

    divs.forEach(div => {
        div.addEventListener('mouseover', rainbowDivGradual)
    });

}
)

const errorMsg = document.querySelector('.errorMsg');

const gridValue = document.querySelector('#grid-value');


//This needs to be global to store reference to divs in the grid
let divs;

//removes any divs present inside the container. First creates divs (.rowDivs) equal to the number user inputs then fills these .rowDivs with divs(.innerDivs) equal to user input. The .rowDivs fixs the width of .innerDivs so that they form a square. 

function generateGrid () {
    let gridNumber = gridValue.value;
    let i = 0;

    const oldDivs = document.querySelectorAll('.rowDiv');

    oldDivs.forEach(div => {
        div.remove()
    });

    if (gridNumber < 2 || gridNumber > 100) {
        errorMsg.textContent = "please enter a valid value"
    }

    else {
        errorMsg.textContent = null

    while (i < gridNumber) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv')
        document.querySelector('.grid-container').append(rowDiv)
        i++
    }
    
    const rows = document.querySelectorAll('.rowDiv');

        rows.forEach(row => {
            for (let i = 0; i < gridNumber; i++) {
                let innerDiv = document.createElement('div');
                innerDiv.classList.add('innerDiv')
                row.append(innerDiv)
            }
        });
    }
        divs = document.querySelectorAll('.innerDiv');
}


//assigns the Divs black color when hovered on
function blackDiv(event) {
    
    let Red = 0;
    let Green = 0;
    let black = 0;

    event.target.style.backgroundColor = `rgb(${Red} ${Green} ${black})`  
}

//colors the div blue and the gradually decreases the B value in RGB to turn it black with every subsequent hover
function blackDivGradual(event) {
    let oldBlack = event.target.getAttribute('style');
    
    let Red = 0;
    let Green = 0;
    let black;

    if (oldBlack === null) {
        black = 255;
    }

    else if (isNaN(Number(oldBlack.slice(-5, -2)))) {
        black = 0;
    }

    else {
        black = Number(oldBlack.slice(-5, -2)) - 26;
    }
    
    event.target.style.backgroundColor = `rgb(${Red} ${Green} ${black})`
   
}

//Assigns the divs a random color
function rainbowDiv(event) {
    let randomRed = (Math.floor(Math.random() * 256));
    let randomGreen = (Math.floor(Math.random() * 256));
    let black = (Math.floor(Math.random() * 256));

    event.target.style.backgroundColor = `rgb(${randomRed} ${randomGreen} ${black})`
   
}

//assigns the div a random color and with every subsequent hover increases the alpha value by 0.1(to prevent a bug where the value went above 1 the alpha value doesn't go over 0.9. Need to fix it)
function rainbowDivGradual(event) {
    let oldAlpha = event.target.getAttribute('style');
    
    let randomRed = (Math.floor(Math.random() * 256));
    let randomGreen = (Math.floor(Math.random() * 256));
    let randomBlue = (Math.floor(Math.random() * 256));
    let alpha
    
    if (oldAlpha === null) {
        alpha = 0.1;
    }
    
    else if (Number(oldAlpha.slice(-4, -2)) == 0.9 || Number(oldAlpha.slice(-4, -2)) == 1 ) {
        alpha = 0.9;
    }

    else {
        alpha = Number(oldAlpha.slice(-4, -2)) + 0.1;
    }
    
    event.target.style.backgroundColor = `rgba(${randomRed} ${randomGreen} ${randomBlue} / ${alpha})`
   
}
