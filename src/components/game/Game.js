import { GameInfo } from "./GameInfo";
import { GameCell } from "./GameCell";
import { useGameState } from "./UseGameState";
import styles from "../../../pages/index.module.scss";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
  } = useGameState();

  return (
    <div className={styles["game"]}>
      <GameInfo
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles["game-field"]}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            currentStep={currentStep}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className={styles["reset"]} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  );
}
