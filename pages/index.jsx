import { useState } from "react";
import { Description } from "../src/components/Description";
import { Field, useGameState } from "../src/components/Field";
import { Header } from "../src/components/Header";
import { Opponents } from "../src/components/Opponents";
import React from "react";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentStep, nextStep, handleCellClick, isWinner, handlePlayerTimeOver} = useGameState({
    playersCount
  });
  return (
    <>
      <Header />
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
        />
      </main>
    </>
  );
}
