'use script'
var gLevel = { SIZE: 4, MINES: 2 }
var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0
}
const MINE = '💣'
const MARK = '❗️'
// '⛳️'
// '🧨❗️'
var gBoard


console.log("hello utilis")
// countUpNegs(2, 2, gBoard)

function negOfStartPoint(cellI, cellJ, mat) {
  var neighborsCount = 0
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= mat[i].length) continue
      mat[i][j].startGamePoint = true
      console.log(mat[i][j])
    }
  }
  getNoStarCells(mat)
  // var newArrWithoutStrayAndNeg=gBoard.slice()
  // console.log(newArrWithoutStrayAndNeg)



}
function getNoStarCells(board) {
  const emptyCells = []
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var currCell = board[i][j]
      if (currCell.startGamePoint === true)
        emptyCells.push({ i: i, j: j })
    }
  }
  console.log(emptyCells)
}

function countNeighbors(cellI, cellJ, mat) {
  var neighborsCount = 0
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= mat[i].length) continue
      if (mat[i][j].isMine === true) neighborsCount++
    }
  }
  gBoard[cellI][cellJ].minesAroundCount = neighborsCount
  // console.log('board' + cellI + cellJ + " = " + gBoard[cellI][cellJ].minesAroundCount)
  // console.log(neighborsCount)
  var elNeg = document.querySelector('h3')
  // elNeg.innerText = `neighbours : ${neighborsCount}`
  return neighborsCount
}

function addRandomBoom() {
  console.log('add boom')
  gBoard[3][3].isMine = true
  gBoard[2][2].isMine = true
  renderBoard(gBoard)
}

