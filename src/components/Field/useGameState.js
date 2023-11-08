import { useEffect, useState } from "react";
import { MOVE_ORDER } from "./constants";
import { algoritmWinner } from "./algoritmWinner.js";

export function getNextSymbol(currentStep, count, playersTimeOver) {
  let shortMoveOrder = MOVE_ORDER.slice(0, count).filter(symbol => !playersTimeOver.includes(symbol))
  let nextSymbol = shortMoveOrder.indexOf(currentStep) + 1;
  return shortMoveOrder[nextSymbol] ?? shortMoveOrder[0];
}

export function useGameState({ playersCount}) {
  
  const [isWinner, setIsWinner] = useState(false) // есть ли победная комбинация
  const [winnerSequence, setWinnerSequence] = useState('') // непосредственно сама победная комбинация
  const [betweenGames, setBetweenGames] = useState(false) // состояние нахождения между концом первой и началом второй
  const [{ cells, currentStep, playersTimeOver }, setGameState] = useState(() => ({ // массив данных ячеек на основании которых происходит рендер
    cells: new Array(19 * 19).fill(null), // действующий символ и массив игроков у которых закончилось время
    currentStep: MOVE_ORDER[0],
    playersTimeOver: []
  }));

  const nextStep = getNextSymbol(currentStep, playersCount, playersTimeOver);
  const winIndex = winnerSequence ? cells[Array.from(winnerSequence)[1]] : ''
  const winnerSymbol = nextStep === currentStep ? currentStep : winIndex

  useEffect(()=> {  // определение победителя по времени
    if(winnerSymbol) {
      setIsWinner(true)
    }
  }, [winnerSymbol])
  
  function handlePlayerTimeOver (symbol) {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentStep: getNextSymbol(lastGameState.currentStep, playersCount, lastGameState.playersTimeOver)
      }
    });
  }
  function handleCellClick(index) {
    if (cells[index]) {
      return;
    }
    if(isWinner) return

    algoritmWinner(index, currentStep, cells, setIsWinner, setWinnerSequence)
    
    setGameState((lastGameState) => ({
      ...lastGameState,
      currentStep: getNextSymbol(lastGameState.currentStep, playersCount, lastGameState.playersTimeOver),
      cells: lastGameState.cells.map((cell, i) =>
        i === index ? lastGameState.currentStep : cell,
      ),
    }));
  }

  function handleResetClick () {
    setIsWinner(false)
    setGameState((lastGameState) => ({
      ...lastGameState,
      cells: new Array(19 * 19).fill(null),
      currentStep: MOVE_ORDER[0],
      playersTimeOver: []
    }))
    let gameFieldGrid = document.getElementById('gameFieldGrid')
    let allButtons = gameFieldGrid.querySelectorAll('button')
    if(winnerSequence) {
      Array.from(winnerSequence).forEach( (index)=> {
        const clasesWinCell = allButtons[index].classList
        clasesWinCell.remove(clasesWinCell[clasesWinCell.length - 1])
      })
    }
    setWinnerSequence('')
    setBetweenGames(false)
  }

  function handleBackClick() {
    document.getElementById('modal-window').innerHTML = '';
    setBetweenGames(true)
  }

  function surrenderClick(symbol) {
    if(confirm('Вы уверены что хотите сдаться?')) { // в дальнейшем заменить
      setGameState((lastGameState) => {
        return {
          ...lastGameState,
          playersTimeOver: [...lastGameState.playersTimeOver, symbol],
          currentStep: getNextSymbol(lastGameState.currentStep, playersCount, lastGameState.playersTimeOver)
        }
      });
    }
  }


  return {
    cells,
    currentStep,
    nextStep,
    handleCellClick,
    isWinner,
    handlePlayerTimeOver,
    winnerSymbol,
    handleResetClick,
    betweenGames,
    handleBackClick,
    surrenderClick
  };
}