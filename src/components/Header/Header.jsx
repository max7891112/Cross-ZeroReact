import styles from'./header.module.scss';
import Image from "next/image.js";
import logo from './img/logo.svg'
import avatarProfile from '../Ui/img/avatar.jpg'
import { Profile } from '../Profile';
import { VectorIcon } from './VectorIcon';
import { UiButton } from '../Ui/uiButton';
export function Header() {
  return (
    <>
        <header className={styles.header}>
          <div className={styles.header__leftPartContainer}>
            <div>
              <Image src={logo} alt='logo'/>
            </div>
            <UiButton variant='play' margin={styles.margin}>play</UiButton>
          </div>
          <div className={styles.avatar} >
            <Profile source={avatarProfile} name={'Paromovevg'} rate={'1230'}/>
            <div className={styles.avatar__vectorContainer}>
              <VectorIcon/>
            </div>
          </div>
        </header>
    </>
  );
}
