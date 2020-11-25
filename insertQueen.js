import "./style.css";

function InsertQueen(row, col, array, casa) {
  if (array[row] == null) {
    casa.innerHTML = `<i class='fas fa-crown'></i>`;
  } else {
    let test = document.getElementById(`#${row}${col}`);
    test.innerHTML = `<i class='fas fa-crown'></i>`;
  }
}

export default InsertQueen;
