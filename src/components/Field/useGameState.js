import { useEffect, useState } from "react";
import { MOVE_ORDER } from "./constants";
import { algoritmWinner } from "./algoritmWinner.js";

export function getNextSymbol(currentStep, count, playersTimeOver) {
  let shortMoveOrder = MOVE_ORDER.slice(0, count).filter(symbol => !playersTimeOver.includes(symbol))
  let nextSymbol = shortMoveOrder.indexOf(currentStep) + 1;
  return shortMoveOrder[nextSymbol] ?? shortMoveOrder[0];
}

export function useGameState({ playersCount}) {
  
  const [isWinner, setIsWinner] = useState(false)
  const [{ cells, currentStep, playersTimeOver }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentStep: MOVE_ORDER[0],
    playersTimeOver: []
  }));
  
  const nextStep = getNextSymbol(currentStep, playersCount, playersTimeOver);
  const winnerSymbol = nextStep === currentStep ? currentStep : ''

  useEffect(()=> {  // определение победителя по времени
    if(winnerSymbol) {
      setIsWinner(true)
      alert(currentStep + ' is winner')
    }
  }, [winnerSymbol, currentStep])
  
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
    algoritmWinner(index, currentStep, cells, setIsWinner)
    
    setGameState((lastGameState) => ({
      ...lastGameState,
      currentStep: getNextSymbol(lastGameState.currentStep, playersCount, lastGameState.playersTimeOver),
      cells: lastGameState.cells.map((cell, i) =>
        i === index ? lastGameState.currentStep : cell,
      ),
    }));
  }

  return {
    cells,
    currentStep,
    nextStep,
    handleCellClick,
    isWinner,
    handlePlayerTimeOver
  };
}