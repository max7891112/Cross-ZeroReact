import { useState } from "react";
import { Description } from "../src/components/Description";
import { Field, useGameState } from "../src/components/Field";
import { Header } from "../src/components/Header";
import { Opponents } from "../src/components/Opponents";

export default function HomePage() {
  const [playersCount] = useState(1);
  const { cells, currentStep, nextStep, handleCellClick } = useGameState({
    playersCount,
  });
  return (
    <>
      <Header />
      <main className="main">
        <Description playersCount={playersCount} />
        <Opponents playersCount={playersCount} currentStep={currentStep}/>
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
