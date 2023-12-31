import { useEffect, useState } from "react";
import clsx from "clsx";
import stylesOpponent from "./opponents.module.scss";
import styles from "../Header/header.module.scss";
import { Profile } from "../Profile";
import { GameSymbol } from "../Field/GameSymbol.jsx";
import { players } from "../Field/constants.js";

export function Opponents({ playersCount, currentStep, isWinner, onPlayerTimeOver }) {
  return (
    <>
      <div className={stylesOpponent.opponents}>
        {players.slice(0, playersCount).map((player, index)=> (
          <PlayerInfo
            key={player.id}
            playerInfo={player}
            isRight={index % 2 === 1}
            isTimerRunning={currentStep === player.symbol && !isWinner}
            isWinner={isWinner}
            playersCount={playersCount}
            onTimeOver ={() => onPlayerTimeOver(player.symbol)}
          />
        ))}
      </div>
    </>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, isWinner, playersCount, onTimeOver }) {
  
  const [seconds, setSeconds]  = useState(60)

  const minuteString = String(Math.floor(seconds / 60)).padStart(2, '0') // функция заполняющая строку определенными значениями
  const secondsString = String(seconds % 60).padStart(2, '0')

  const isDanger = seconds < 10

  useEffect(()=> {
    const timer = setInterval(()=> {
      if(isTimerRunning) {
        setSeconds(prevSeconds => prevSeconds > 0 ? isWinner ? prevSeconds : prevSeconds - 1 : prevSeconds)
      }
    },1000)

    return ()=> {
      clearInterval(timer)
      setSeconds(60)
    }
  }, [isTimerRunning, isWinner])

  useEffect(()=> {
      if(seconds == 55) {
        onTimeOver()
      }
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [seconds, playersCount, isWinner])

  return (
    <div
      className={clsx(
        styles.header__rightPartContainer,
        styles.avatar,
        stylesOpponent.opponents__person,
      )}>
        <div
          className={clsx(
            stylesOpponent.opponents__profileContainer,
            isRight && stylesOpponent.order3,
          )}
        >
          <Profile
            avatar={playerInfo.avatar}
            name={playerInfo.name}
            rate={playerInfo.rate}
          />
          <div className={stylesOpponent.opponents__sign}>
            <GameSymbol symbol={playerInfo.symbol} width={"12"} height={"12"} />
          </div>
        </div>
        <div
          className={clsx(
            stylesOpponent.opponents__divider,
            isRight && stylesOpponent.order2,
          )}
        ></div>
        <div
          className={clsx(
            stylesOpponent.opponents__time,
            isRight && stylesOpponent.order1,
            isDanger ? stylesOpponent.opponents__dangerTime : '',
            isTimerRunning && stylesOpponent.opponents__active
          )}
        >
          {minuteString}:{secondsString}
        </div>
    </div>
  );
}