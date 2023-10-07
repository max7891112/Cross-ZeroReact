import style from './field.module.scss';
import { UiButton } from '../Ui/uiButton';
import {CrossIcon} from '../Ui/icons/CrossIcon.jsx'
import {ZeroIcon} from '../Ui/icons/ZeroIcon.jsx'
import clsx from 'clsx';
import { useState } from 'react';
import { SYMBOL_X, SYMBOL_O } from './constants';
import { GameSymbol } from './GameSymbol';

export function Field ({margin}){
    const [cells, setCells] = useState(() => new Array(19*19).fill(null))
    const [currentStep, setCurrentStep] = useState(SYMBOL_X)

    function handleCellClick(index) {
        if (cells[index]) {
            return;
        }
        const cellsCopy = cells.slice();
        
        cellsCopy[index] = currentStep;
        setCells(cellsCopy)
        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    }

    return (
        <GameFieldlayout margin={margin}>
            <GameMoveInfo currentStep={currentStep}></GameMoveInfo>
            <GameFieldGrid>
            {cells.map((symbol, index)=> (
                <GameCell key={index} symbol={symbol} handleCellClick={handleCellClick} index={index}/>
            ))}
            </GameFieldGrid>
        </GameFieldlayout>
    )
}

function GameFieldlayout ({children, margin}) {
    return (
        <div className={clsx(style.field, margin)}>
            {children}
        </div>
    )
}

function GameMoveInfo({currentStep}) {
    return (
        <div className={style.field__topContainer}>
        <div className={style.field__leftPart}>
            <div className={style.field__step}>
                <p>Ход: </p> 
                {currentStep == SYMBOL_X ? <CrossIcon width={'16'} height={'16'}/> : <ZeroIcon width={'16'} height={'16'}/>}
            </div>
            <div className={style.field__next}>
                <p>Следующий: </p> 
                {currentStep == SYMBOL_X ? <ZeroIcon/> : <CrossIcon/>}
            </div>
        </div>
        <div className={style.field__rightPart}>
            <UiButton variant='draw'>Ничья</UiButton>
            <UiButton variant='giveUp'>Сдаться</UiButton>
        </div>
    </div>
    )
}

function GameFieldGrid({children}) {
    return (
        <div className={style.field__fieldContainer}>
            {children}
        </div>
    )
}

function GameCell ({handleCellClick, index, symbol}) {
    return <button
        className={style.field__cell}
        onClick={() => handleCellClick(index)}>{symbol ? <GameSymbol symbol={symbol} /> : null}
    </button> 
}