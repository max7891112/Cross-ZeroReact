import style from './field.module.scss'
import avatarMen from "../Ui/img/avatar.jpg";
import avatarGirl from "../Opponents/img/girlAvatar.svg";
import lara from "../Ui/img/lara.png";
import dodik from "../Ui/img/dodik.png";
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

export const players = [
  {
    id: 1,
    name: "Paromovevg",
    rate: 1230,
    avatar: avatarMen,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rate: 850,
    avatar: avatarGirl,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rate: 1400,
    avatar: lara,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rate: 760,
    avatar: dodik,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

// export const winnerName = {
//   cross : ,
//   zero : ,
//   triangle : ,
//   square : ,
// }