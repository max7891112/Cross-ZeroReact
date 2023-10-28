import { CrossIcon } from "../Ui/icons/CrossIcon.jsx";
import { ZeroIcon } from "../Ui/icons/ZeroIcon.jsx";
import { TriangleIcon } from "../Ui/icons/TriangleIcon.jsx";
import { SquareIcon } from "../Ui/icons/SquareIcon.jsx";
import { MOVE_ORDER } from "./constants.js";
export function getSymbolIcon(symbol, width, height) {
  if (symbol === MOVE_ORDER[0])
    return <CrossIcon width={width} height={height} />;
  if (symbol === MOVE_ORDER[1])
    return <ZeroIcon width={width} height={height} />;
  if (symbol === MOVE_ORDER[2])
    return <TriangleIcon width={width} height={height} />;
  if (symbol === MOVE_ORDER[3])
    return <SquareIcon width={width} height={height} />;
  return "";
}
