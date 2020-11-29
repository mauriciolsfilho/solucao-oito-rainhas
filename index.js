import "./style.css";

const appDiv = document.getElementById("tabuleiro");
let result = [];

(() => {
  printBoard();
  for (let work = 0; work < 8; work++) {
    main(result, work);
  }
})();

function printBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let casa = document.createElement("div");
      casa.setAttribute("id", `${i}${j}`);
      casa.setAttribute("class", "casa");
      appDiv.appendChild(casa);

      if (i % 2 == 0) {
        if (j % 2 == 0) {
          casa.style.backgroundColor = "white";
          casa.style.color = "black";
        } else {
          casa.style.backgroundColor = "black";
          casa.style.color = "white";
        }
      } else {
        if (j % 2 == 0) {
          casa.style.backgroundColor = "black";
          casa.style.color = "white";
        } else {
          casa.style.backgroundColor = "white";
          casa.style.color = "black";
        }
      }
    }
  }
}

function main(result, work) {
  console.log("FUNCTION MAIN RUNNING", work);
  if (result.length == 0) {
    setFirstQueen(result);
  } else {
    for (let aux = 0; aux < 8; aux++) {
      console.log(work, aux);
    }
    //console.log("tamanho vetor", result.length);
    //console.log("valores de linha salvo", result);
  }
}

function setFirstQueen(array) {
  let random = getRandom(8) - 1;
  array[0] = random;
  console.log(random);
  insertQueen(random, array.length - 1);
}

function checkRow(result, row, column) {
  if (result[column].value === row) {
    console.log("valor verdadeiro");
    return true;
  } else {
    return false;
  }
}

function checkColumn(result, column) {
  if (result[column] != null) {
    return true;
  } else {
    return false;
  }
}

function getRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

function insertQueen(row, column) {
  let insert = document.getElementById(`${row}${column}`);
  insert.innerHTML = `<i class='fas fa-crown'></i>`;
}

function checkDiagonal(lastRow, lastCol, row, col) {
  if (Math.abs(lastQueen) == Math.abs(q2)) {
    return true;
  } else {
    return false;
  }
}
