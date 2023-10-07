import classNames from 'classnames';
import stylesOpponent from'./opponents.module.scss';
import styles from '../Header/header.module.scss'
import { Profile } from '../Profile'
import avatarMen from '../Ui/img/avatar.jpg';
import avatarGirl from './img/girlAvatar.svg';
import cross from '../Ui/img/cross.svg'
import circle from '../Ui/img/circle.svg'
import Image from 'next/image';
export function Opponents() {
  return (
      <>
        <div className={stylesOpponent.opponents}>

            <div className={classNames(styles.header__rightPartContainer, styles.avatar, stylesOpponent.opponents__leftPerson)} >
                <Profile source={avatarMen} name={'Paromovevg'} rate={'1230'}/>
                <div className={stylesOpponent.opponents__sign}>
                    <Image src={cross} alt='cross'/>
                </div>
            </div>

            <div className={stylesOpponent.opponents__divider}></div>

            <div className={stylesOpponent.opponents__timeContainer}>
                <div className={stylesOpponent.opponents__leftTime}>01:08</div>
                <div className={stylesOpponent.opponents__rightTime}>00:08</div>
            </div>

            <div className={stylesOpponent.opponents__divider}></div>

            <div className={classNames(styles.header__rightPartContainer, styles.avatar, stylesOpponent.opponents__leftPerson)} >
                <Profile source={avatarGirl} name={'VereInted'} rate={'850'}/>
                <div className={stylesOpponent.opponents__sign}>
                    <Image src={circle} alt='circle'/>
                </div>
            </div>
        </div>
      </>
  );
}