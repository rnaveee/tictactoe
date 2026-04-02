class Player {
    constructor(name, score, marker) {
        this.name = name;
        this.marker = marker;
    }
}

const grid = document.querySelector(".grid-container");
let boxes = [];
for(let i = 0; i < grid.children.length; i++){
    boxes.push(grid.children[i]);
    boxes[i].addEventListener('mouseover', () => {
        boxes[i].style.backgroundColor = 'grey';
    });
    boxes[i].addEventListener('mouseover', () => {
        boxes[i].style.backgroundColor = 'grey';
    });
}