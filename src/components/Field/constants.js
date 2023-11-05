import style from './field.module.scss'
export const SYMBOL_X = "X";
export const SYMBOL_O = "O";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const cellClassname = {
  cross : style.cellWinX,
  zero : style.cellWinO,
  triangle : style.cellWinT,
  square : style.cellWinS,
}

function createProhibitIndexes () {
  const prohibitIndexesObj = {}
  for(let i = 1; i <= 19; i++) {
    prohibitIndexesObj[18 * i + (i - 1)] = [18 * i + (i - 1) + 1, 18 * i + (i - 1) + 20, 18 * i + (i - 1) - 18]
  }
  return prohibitIndexesObj
}
export const prohibitIndexesObj = createProhibitIndexes()
