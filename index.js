import "./style.css";

const appDiv = document.getElementById("tabuleiro");
let result = [];

core(result);

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

function core(result) {
  console.log("FUNCTION CORE RUNNING");
  printBoard();

  if (result.length == 0) {
    console.log("entrou em 0");
    result[0] = 0;
    let insert = document.getElementById(
      `${result.length - 1}${result[result.length - 1]}`
    );
    insert.innerHTML = `<i class='fas fa-crown'></i>`;
  } else {
    console.log("tamanho vetor", result.length);
    console.log("valores de linha salvo", result);
  }
}
function resetArray(array) {
  for (let aux = 0; aux < 8; aux++) {
    result.push(null);
    /**
     * if (aux === 3) {
      let test = document.getElementById(`${aux}${aux}`);
      test.innerHTML = "<i class='fas fa-crown'></i>";
    }
     */
  }
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
