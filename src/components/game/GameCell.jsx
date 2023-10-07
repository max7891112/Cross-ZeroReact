// import { SYMBOL_O } from "./constants.js";
import styles from "../../../pages/index.module.scss";
// import { GameSymbol } from "./GameSymbol.jsx";
export function GameCell({ isWinner, onClick, symbol, currentStep }) {
  return (
    <button
      className={`${styles["cell"]} ${
        isWinner
          ? currentStep == SYMBOL_O
            ? styles["cell--win-x"]
            : styles["cell--win-o"]
          : ""
      }`}
      onClick={onClick}
    >
      {/* {symbol ? <GameSymbol symbol={symbol} /> : null} */}
    </button>
  );
}
