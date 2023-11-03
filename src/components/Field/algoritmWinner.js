import style from './field.module.scss'
const cellClassname = {
  cross : style.cellWinX,
  zero : style.cellWinO,
  triangle : style.cellWinT,
  square : style.cellWinS,
}

const prohibitIndexesObj = {}
for(let i = 1; i <= 19; i++) {
  prohibitIndexesObj[18 * i + (i - 1)] = [18 * i + (i - 1) + 1, 18 * i + (i - 1) + 20, 18 * i + (i - 1) - 18]
}

export function algoritmWinner (index, currentStep, cells, setIsWinner) {
  const objWinnerVariabales = {
    1: 1,
    19: 1,
    20:  1,
    18:  1
  }
  function baseRecursion(currentIndex, indexDirection, variableDirection, sequenceWinnerSymbols) {
    sequenceWinnerSymbols.add(currentIndex)
    if(cells[currentIndex + indexDirection] == currentStep) {
      variableDirection[Math.abs(indexDirection)]++
      if(variableDirection[Math.abs(indexDirection)] == 5) {
        setTimeout(()=> {
          let notWinnerCombination = false
          let sequenceWinnerSymbolsArr = Array.from(sequenceWinnerSymbols)
          sequenceWinnerSymbolsArr.forEach(item => {
            if(prohibitIndexesObj[item]) {
              const common = sequenceWinnerSymbolsArr.filter(x => prohibitIndexesObj[item].indexOf(x) !== -1)
              if(common && common.length != 0) {
                if(sequenceWinnerSymbolsArr.length > 5) {
                  let tmp = sequenceWinnerSymbolsArr.slice(0, sequenceWinnerSymbolsArr.indexOf(common[0]))
                  tmp.push(common[0])
                  if(tmp.length >= 5 )  {
                    sequenceWinnerSymbolsArr = tmp
                  } else {
                    notWinnerCombination = true
                  }

                } else {
                  notWinnerCombination = true
                }
                
              }
            }
          })
          if(notWinnerCombination) return

          let gameFieldGrid = document.getElementById('gameFieldGrid')
          let allButtons = gameFieldGrid.querySelectorAll('button')
          sequenceWinnerSymbolsArr.forEach((winIndex) => {
            allButtons.forEach((cell, index) => {
              if(index == winIndex) cell.classList.add(cellClassname[currentStep])
            })
          })
          alert(currentStep  + ' is winner')
          setIsWinner(true)
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

  return
}