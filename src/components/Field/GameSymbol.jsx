import { MOVE_ORDER } from "./constants";
import { getSymbolIcon } from "./GetSymbolIcon.jsx";
import clsx from "clsx";
import style from "./field.module.scss";
export function GameSymbol({ symbol, width, height }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === MOVE_ORDER[0]) return style.symbolX;
    if (symbol === MOVE_ORDER[1]) return style.symbolO;
    if (symbol === MOVE_ORDER[2]) return style.symbolT;
    if (symbol === MOVE_ORDER[3]) return style.symbolS;
    return "";
  };

  return (
    <span className={clsx(style.symbol, getSymbolClassName(symbol))}>
      {getSymbolIcon(symbol, width, height)}
    </span>
  );
}
