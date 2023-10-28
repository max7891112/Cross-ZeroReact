import Image from "next/image";
import styles from "../Header/header.module.scss";
import avatarSrc from "../Ui/img/avatar.jpg";
export function Profile({ avatar = avatarSrc, name, rate }) {
  return (
    <>
      <div className={styles.avatar__imgContainer}>
        <Image src={avatar} width={48} height={48} alt="avatar" />
      </div>
      <div className={styles.avatar__descContainer}>
        <p className={styles.avatar__name}>{name}</p>
        <p className={styles.avatar__rate}>
          Рейтинг: <span className={styles.avatar__rateDinamic}>{rate}</span>
        </p>
      </div>
    </>
  );
}
