import style from "./field.module.scss";
import { UiButton } from "../Ui/uiButton";
import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";
import { getSymbolIcon } from "./GetSymbolIcon.jsx";

export function Field({ margin, cells, currentStep, nextStep, handleCellClick}) {
  return (
    <GameFieldlayout margin={margin}>
      <GameMoveInfo
        currentStep={currentStep}
        nextStep={nextStep}
      ></GameMoveInfo>
      <GameFieldGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            handleCellClick={handleCellClick}
            index={index}
          />
        ))}
      </GameFieldGrid>
    </GameFieldlayout>
  );
}

function GameFieldlayout({ children, margin }) {
  return <div className={clsx(style.field, margin)}>{children}</div>;
}

function GameMoveInfo({ currentStep, nextStep }) {
  return (
    <div className={style.field__topContainer}>
      <div className={style.field__leftPart}>
        <div className={style.field__step}>
          <p>Ход: </p>
          {getSymbolIcon(currentStep, "20", "20")}
        </div>
        <div className={style.field__next}>
          <p>Следующий: </p>
          {getSymbolIcon(nextStep, "16", "16")}
        </div>
      </div>
      <div className={style.field__rightPart}>
        <UiButton variant="draw">Ничья</UiButton>
        <UiButton variant="giveUp">Сдаться</UiButton>
      </div>
    </div>
  );
}

function GameFieldGrid({ children }) {
  return <div className={style.field__fieldContainer} id='gameFieldGrid'>{children}</div>;
}

function GameCell({ handleCellClick, index, symbol}) {
  return (
    <button
      className={clsx(style.field__cell)}
      onClick={() => handleCellClick(index)}
    >
      {symbol ? (
        <GameSymbol symbol={symbol} width={"20"} height={"20"} />
      ) : null}
    </button>
  );
}

