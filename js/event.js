//hovering and coloring
const box = document.querySelectorAll(".gridBox");
box.forEach((gridBox) => {
    gridBox.addEventListener("mouseover", (event) => {
        event.target.style.background = "orange";
        if (event.target.style.opacity == "") {
            event.target.style.opacity = "0";
        }
        if (event.target.style.opacity != 1) {
            event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
        }
    });
});

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    const newSize = prompt("Input the new Grid size [range: 1 - 100]")
    if (newSize < 1 || newSize > 100) { alert("Invalid Input Range"); }
    else {
        // alert("entered"); //for debugging
        createNewGrid(newSize);

        const box = document.querySelectorAll(".gridBox");
        box.forEach((gridBox) => {
            gridBox.addEventListener("mouseover", (event) => {
                event.target.style.background = "orange";
                if (event.target.style.opacity == "") {
                    event.target.style.opacity = "0";
                }
                if (event.target.style.opacity != 1) {
                    event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
                }
            });
        });

    }
});