// import { GameSymbol } from "./GameSymbol";
import styles from "../../../pages/index.module.scss";
export function GameInfo({ winnerSymbol, currentStep }) {

  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={styles["game-info"]}>
      {/* Ход: <GameSymbol symbol={currentStep} /> */}
    </div>
  );
}
