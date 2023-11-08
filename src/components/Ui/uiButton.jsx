import clsx from "clsx";
import style from "./uiStyle.module.scss";
export function UiButton({ children, variant, margin, handleClick }) {
  const buttonClassName = clsx(
    style.button,
    margin,
    {
      play: style.play,
      draw: style.draw,
      giveUp: style.giveUp,
    }[variant],
  );
  return <button className={buttonClassName} onClick={handleClick}>{children}</button>;
}
