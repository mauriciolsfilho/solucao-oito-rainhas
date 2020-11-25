import "./style.css";
import InsertQueen from "./insertQueen.js";
import { crown } from "@fortawesome/fontawesome-svg-core";

const appDiv = document.getElementById("tabuleiro");
let solution = [];

printBoard();

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
      solution[0] = 0;
      if (solution[j] == null && solution.filter(index => index == i)) {
        console.log(i, j);

        let test = document.getElementById(`${i}${j}`);
        test.innerHTML = `<i class='fas fa-crown'></i>`;
        console.log(test);
      } else {
      }
    }
  }
}

function InsertQueen(row, col, array, casa) {
  if (array[row] == null) {
    casa.innerHTML = `<i class='fas fa-crown'></i>`;
  } else {
    let test = document.getElementById(`#${row}${col}`);
    test.innerHTML = `<i class='fas fa-crown'></i>`;
  }
}
