//DIV Creation
const container = document.querySelector(".container");
const buttonSpace=document.querySelector('.buttonSpace');

const resetBtn = document.createElement("button");
resetBtn.innerText = "Click to Re-make the Grid";

buttonSpace.appendChild(resetBtn);


//initial 16x16 grid;
for (let i = 0; i < 16; i++) //for-loop to create rowsContainer;
{
    const rowsContainer = document.createElement("div");
    rowsContainer.classList = "rowsContainer";

    for (let j = 0; j < 16; j++) //stuff 16 divs (gridBoxes) in each rowsContainer;
    {
        const gridBox = document.createElement("div");
        gridBox.classList = "gridBox"
        rowsContainer.appendChild(gridBox);
    }
    container.appendChild(rowsContainer);
}


function createNewGrid(newSize) {
    
    container.innerHTML="";
    for (let i = 0; i < newSize; i++) //for-loop to create rowsContainer;
    {
        const rowsContainer = document.createElement("div");
        rowsContainer.classList = "rowsContainer";

        for (let j = 0; j < newSize; j++) //stuff 16 divs (gridBoxes) in each rowsContainer;
        {
            const gridBox = document.createElement("div");
            gridBox.classList = "gridBox"
            rowsContainer.appendChild(gridBox);
        }
        container.appendChild(rowsContainer);
    }
}