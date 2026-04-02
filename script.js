function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

const grid = document.querySelector(".grid-container");


let boxes = [];
let j = 0;
for(let i = 0; i < 3; i++){
    let boxRow = [];
    for(let k = 0; k < 3; k++){
        console.log(j);
        boxRow.push(grid.children[j])
        j++;
    }
}
boxes.forEach(r => {
    r.forEach(c => {
        c.addEventListener('mouseover', () => {
            c.style.backgroundColor = 'grey';
        });
        c.addEventListener('mouseout', () => {
            c.style.backgroundColor = 'white';
        });
    });
});