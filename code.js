//DIV Creation
const container = document.querySelector(".container");

for(let i = 0; i < 16; i++) //for-loop to create rowsContainer;
{
    const rowsContainer = document.createElement("div");
    rowsContainer.classList="rowsContainer";

    for(let j = 0; j<16; j++) //stuff 16 divs (gridBoxes) in each rowsContainer;
    {
        const gridBox = document.createElement("div");
        gridBox.classList="gridBox"
        rowsContainer.appendChild(gridBox);
    }
    container.appendChild(rowsContainer);
}
