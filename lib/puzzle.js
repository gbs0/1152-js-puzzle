// todo
const button = document.querySelector("#btn");
button.addEventListener('click', (event) => {
    const hint = document.querySelector(".hint");
    hint.classList.toggle("active");
})

const moveTile = (target) => {
    const empty = document.querySelector(".empty");
    empty.classList.remove("empty");
    empty.innerHTML = target.innerHTML;
    target.classList.add("empty");
    target.innerHTML = "";
} 

const canMove = (target) => {
    const empty = document.querySelector(".empty");
    const emptyColumn = empty.cellIndex;
    const tileColumn = target.cellIndex;
    const tileRow = target.parentElement.rowIndex;
    const emptyRow = empty.parentElement.rowIndex;
    
    // console.log(tileRow);
    // console.log(emptyColumn);

    // VERIFICA SE ESTA NA MESMA LINHA (tileRow === emptyRow)
    return(
        tileRow === emptyRow && emptyColumn === tileColumn - 1 ||
        tileRow === emptyRow && emptyColumn === tileColumn + 1 ||
        emptyColumn === tileColumn && tileRow === emptyRow + 1 ||
        emptyColumn === tileColumn && tileRow === emptyRow - 1
    )
}

const checkVictory = () => {
    const tileOrder = document.querySelectorAll("td")
    const array = Array.from(tileOrder).map((tile) => {
        return tile.innerText;
    })
    // console.log(array.join())
    if (array.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
        setTimeout(() => {
            alert("You win!");    
        }, 400);
    }
}

const tiles = document.querySelectorAll("td");
tiles.forEach((tile) => {
    tile.addEventListener('click', (event) => {
       // Move a tile
       if (canMove(event.currentTarget)) {
        moveTile(event.currentTarget);
        checkVictory();
       }
    })
});