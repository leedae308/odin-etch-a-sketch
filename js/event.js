//hovering and coloring

const box = document.querySelectorAll(".gridBox");
box.forEach((gridBox)=> {
    gridBox.addEventListener("mouseover", (event)=>{
        event.target.style.background = "orange";
    });
});
