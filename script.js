const blackButton = document.querySelector('.black');
const blueToBlackButton = document.querySelector('.blue-to-black');
const rainbowButton = document.querySelector('.rainbow');
const darkerRainbowButton = document.querySelector('.darker-rainbow');

blackButton.addEventListener('click', () => {
    divs = document.querySelectorAll('.innerDiv');

    divs.forEach(div => {
        div.removeEventListener('mouseover', blackDivGradual)
        div.removeEventListener('mouseover', rainbowDivGradual)
        div.removeEventListener('mouseover', rainbowDiv)
        div.addEventListener('mouseover', blackDiv)
    });
}
)

blueToBlackButton.addEventListener('click', () => {
    divs = document.querySelectorAll('.innerDiv');

    divs.forEach(div => {
        div.removeEventListener('mouseover', blackDiv)
        div.removeEventListener('mouseover', rainbowDiv)
        div.removeEventListener('mouseover', rainbowDivGradual)
        div.addEventListener('mouseover', blackDivGradual)
    });
}
)

rainbowButton.addEventListener('click', () => {
    divs = document.querySelectorAll('.innerDiv');

    divs.forEach(div => {
        div.removeEventListener('mouseover', blackDivGradual)
        div.removeEventListener('mouseover', blackDiv)
        div.removeEventListener('mouseover', rainbowDivGradual)
        div.addEventListener('mouseover', rainbowDiv)
    });
}
)

darkerRainbowButton.addEventListener('click', () => {
    divs = document.querySelectorAll('.innerDiv');

    divs.forEach(div => {
        div.removeEventListener('mouseover', blackDivGradual)
        div.removeEventListener('mouseover', rainbowDiv)
        div.removeEventListener('mouseover', blackDiv)
        div.addEventListener('mouseover', rainbowDivGradual)
    });

}
)

const gridValue = document.querySelector('#grid-value');
gridValue.addEventListener('change', generateGrid)

//This needs to be global to store reference to divs in the grid
let divs;

//removes any divs present inside the container. First creates divs (.rowDivs) equal to the number user inputs then fills these .rowDivs with divs(.innerDivs) equal to user input. The .rowDivs fixs the width of .innerDivs so that they form a square. 

function generateGrid (event) {
    let gridNumber = event.target.value;
    let i = 0;

    const oldDivs = document.querySelectorAll('.rowDiv');

    oldDivs.forEach(div => {
        div.remove()
    });

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

    getDivRef()    
}


//assigns the div a random class to color it. If the same div is selected again removes the previous class and assigns a new one

function blackDiv(event) {
    
    let Red = 0;
    let Green = 0;
    let black = 0;

    event.target.style.backgroundColor = `rgb(${Red} ${Green} ${black})`
   
}

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

function rainbowDiv(event) {
    let oldBlack = event.target.getAttribute('style');
    
    let randomRed = (Math.floor(Math.random() * 256));
    let randomGreen = (Math.floor(Math.random() * 256));
    let black = (Math.floor(Math.random() * 256));

    event.target.style.backgroundColor = `rgb(${randomRed} ${randomGreen} ${black})`
   
}

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

function gradualllyDarkDiv(event) {
    let oldAlpha = event.target.getAttribute('style');
    console.log(oldAlpha.slice(-4, -2))
    
}

function getDivRef() {
divs = document.querySelectorAll('.innerDiv');
divs.forEach(div => {
    div.addEventListener('mouseover', blackDiv)
    
});
}