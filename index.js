import "./style.css";

const appDiv = document.getElementById("tabuleiro");
let result = [];

printBoard();
main(result);

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

function main(result) {
  let control = true;
  //console.log("FUNCTION MAIN RUNNING");
  for (let row = 0; row < 8 && control; row++) {
    if (result.length == 0) {
      setFirstQueen(result);
    } else {
      for (let col = 0; col <= result.length; col++) {
        let rowQueen = result[col] == undefined ? result[col - 1] : result[col];
        let validacao = validate(rowQueen, result.length - 1, row, col);
        console.log(validacao);
        if (validacao) {
          if (rowQueen !== row && col == result.length) {
            console.log("ASFASDFAFD", row);
            insertQueen(row, col);
            result[col] = row;
          }
          //console.log("NAO BATEU NA MESMA LINHA NEM DIAGONAL");
        }
      }
      console.log("tamanho vetor", result.length);
      //console.log("valores de linha salvo", result);
    }
  }
}

function setFirstQueen(array) {
  let random = getRandom(8) - 1;
  array[0] = random;
  console.log(random);
  insertQueen(random, array.length - 1);
}

function getRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

function insertQueen(row, column) {
  let insert = document.getElementById(`${row}${column}`);
  insert.innerHTML = `<i class='fas fa-crown'></i>`;
}

function validate(lastRow, lastCol, row, col) {
  let v1 = Math.abs(lastRow - row);
  let v2 = Math.abs(lastCol - col);

  console.log(`lRow ${lastRow} row ${row} v1 ${v1}`);
  console.log(`lCol ${lastCol} col ${col} v2 ${v2}`);

  if (v1 == v2) {
    return false;
  } else {
    return true;
  }
}
