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
}

let gridValue = document.querySelector('#grid-value');

gridValue.addEventListener('change', generateGrid)