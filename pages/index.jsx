import { useState } from "react";
import { Description } from "../src/components/Description";
import { Field, useGameState } from "../src/components/Field";
import { Header } from "../src/components/Header";
import { Opponents } from "../src/components/Opponents";
import { Modal } from "../src/components/Modal";
import React from "react";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, 
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
  } = useGameState({
    playersCount
  });
  return (
    <>
      <Header handleResetClick={handleResetClick} betweenGames={betweenGames}/>
      <main className="main">
        <Description playersCount={playersCount} />
        <Opponents playersCount={playersCount}
        isWinner={isWinner} 
        currentStep={currentStep}
        onPlayerTimeOver={handlePlayerTimeOver}
        />
        <Field margin="field__margin" 
        cells={cells} 
        currentStep={currentStep} 
        nextStep={nextStep} 
        handleCellClick={handleCellClick}
        surrenderClick={surrenderClick}
        betweenGames={betweenGames}
        />
        {isWinner ? <Modal 
        playersCount={playersCount}
        isWinner={isWinner} 
        currentStep={currentStep}
        onPlayerTimeOver={handlePlayerTimeOver}
        winnerSymbol={winnerSymbol}
        handleResetClick={handleResetClick}
        handleBackClick={handleBackClick}
        /> : ''}
      </main>
    </>
  );
}
