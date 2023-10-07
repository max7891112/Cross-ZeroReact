import { SYMBOL_X, SYMBOL_O } from './constants.js'
import clsx from "clsx";
import style from './field.module.scss'
export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return style.symbolO;
    if (symbol === SYMBOL_X) return style.symbolX;
    return "";
};
  return (
    <span className={clsx(style.symbol, getSymbolClassName(symbol))}>
      {symbol}
    </span>
  );
}
