import style from './modal.module.scss'
import { UiButton } from '../Ui/uiButton.jsx'
import { Opponents } from '../Opponents/Opponents'
import { players } from '../Field/constants';
import { CloseIcon } from '../Ui/icons/CloseIcon';
export function Modal({ playersCount, currentStep, isWinner, onPlayerTimeOver, winnerSymbol, handleResetClick, handleBackClick }) {
    const winPlayer = players.find( player => player.symbol === winnerSymbol)
    const winName = winPlayer?.name

    function handleBackOverlayClick (event) {
        if(event.target.closest('#modal-body')) return
        handleBackClick()
    }
    
    return (
      <>
        <div className={style.modal} id='modal-window'>
            <div className={style.modal__overlay} onClick={handleBackOverlayClick}>
                <div className={style.modal__body} id='modal-body'>
                    <div className={style.modal__header}>
                        <h2 className={style.modal__title}>Игра завершена</h2>
                        <p className={style.modal__winner}>Победитель: <span>{winName}</span></p>
                    </div>
                    <div className={style.modal__playersContainer}>
                        <Opponents playersCount={playersCount}
                            isWinner={isWinner}
                            currentStep={currentStep}
                            onPlayerTimeOver={onPlayerTimeOver}
                        />
                    </div>
                    <div className={style.modal__footer}>
                        <UiButton variant="giveUp" handleClick={handleBackClick}>Вернуться</UiButton>
                        <UiButton variant="draw" handleClick={handleResetClick}>Играть снова</UiButton>
                    </div>
                    <div className={style.modal__close} onClick={handleBackClick}>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }