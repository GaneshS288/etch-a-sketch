function generateGrid () {
    let gridNumber = Number(prompt('Enter the number of grids you want'))
    let i = 0;

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
