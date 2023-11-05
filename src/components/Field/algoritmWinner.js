import { cellClassname , prohibitIndexesObj} from './constants.js'

export function algoritmWinner (index, currentStep, cells, setIsWinner) {
  const objWinnerVariabales = {
    1: 1,
    19: 1,
    20:  1,
    18:  1
  }

  function baseRecursion(currentIndex, indexDirection, variableDirection, sequenceWinnerSymbols) {
    sequenceWinnerSymbols.add(currentIndex) // добавляем данный индекс в выигрышную последовательность индексов
    if(cells[currentIndex + indexDirection] == currentStep) { // если следующий элемент по тому же направлению с тем же символом
      variableDirection[Math.abs(indexDirection)]++ // инкрементируем выигрышную последовательность
      if(variableDirection[Math.abs(indexDirection)] == 5) { // если какая либо из последовательностей набирает 5
        setTimeout(()=> { // производится проверка всех возможных кейсов и выкидываются неверные вариванты
          let [notWinnerCombination, winnerSymbolsArr] = throwIncorrectWinCombination(sequenceWinnerSymbols)

          if(notWinnerCombination) return

          addWinClassAndWindow(winnerSymbolsArr, currentStep, setIsWinner)
          return
        },100)
      }  
      return baseRecursion(currentIndex + indexDirection, indexDirection, variableDirection, sequenceWinnerSymbols)
    }
  }

  function findWinRightLeftDirection(currentIndex) {
    let sequenceWinnerSymbols = new Set()
    baseRecursion(currentIndex, 1, objWinnerVariabales, sequenceWinnerSymbols)
    baseRecursion(currentIndex, -1, objWinnerVariabales, sequenceWinnerSymbols)
  }

  function findWinTopBottomDirection(currentIndex) {
    let sequenceWinnerSymbols = new Set()
    baseRecursion(currentIndex, -19, objWinnerVariabales, sequenceWinnerSymbols)
    baseRecursion(currentIndex, 19, objWinnerVariabales, sequenceWinnerSymbols)
  }

  function findWinTopBottomCrossDirection(currentIndex) {
    let sequenceWinnerSymbols = new Set()
    baseRecursion(currentIndex, -20, objWinnerVariabales, sequenceWinnerSymbols)
    baseRecursion(currentIndex, 20, objWinnerVariabales, sequenceWinnerSymbols)
  }

  function findWinRightTopDirection(currentIndex) {
    let sequenceWinnerSymbols = new Set()
    baseRecursion(currentIndex, -18, objWinnerVariabales, sequenceWinnerSymbols)
    baseRecursion(currentIndex, 18, objWinnerVariabales, sequenceWinnerSymbols)
  }

  findWinRightLeftDirection(index)
  findWinTopBottomDirection(index)
  findWinTopBottomCrossDirection(index)
  findWinRightTopDirection(index)
}

function addWinClassAndWindow (sequenceWinnerSymbolsArr, currentStep, setIsWinner) {
  let gameFieldGrid = document.getElementById('gameFieldGrid')
  let allButtons = gameFieldGrid.querySelectorAll('button')
  sequenceWinnerSymbolsArr.forEach((winIndex) => {
    allButtons.forEach((cell, index) => {
      if(index == winIndex) cell.classList.add(cellClassname[currentStep])
    })
  })
  alert(currentStep  + ' is winner')
  setIsWinner(true)
}

function throwIncorrectWinCombination(sequenceWinnerSymbols) {
  let notWinnerCombination = false
  let sequenceWinnerSymbolsArr = Array.from(sequenceWinnerSymbols)
  sequenceWinnerSymbolsArr.forEach(item => { // выбрасываются значения переходящие через границу
    if(prohibitIndexesObj[item]) {
      const common = sequenceWinnerSymbolsArr.filter(x => prohibitIndexesObj[item].indexOf(x) !== -1)
      if(common && common.length != 0) {
        if(sequenceWinnerSymbolsArr.length > 5) {
          let tmpArr = sequenceWinnerSymbolsArr.slice(0, sequenceWinnerSymbolsArr.indexOf(common[0]))
          tmpArr.push(common[0])
          if(tmpArr.length >= 5 )  {
            sequenceWinnerSymbolsArr = tmpArr
          } else {
            notWinnerCombination = true
          }
        } else {
          notWinnerCombination = true
        }
      }
    }
  })
  return [notWinnerCombination, sequenceWinnerSymbolsArr]
}