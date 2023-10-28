import styles from "./description.module.scss";
import { StarIcon } from "./icons/StarIcon";
import { PeopleIcon } from "./icons/PeopleIcon";
import { ClockIcon } from "./icons/ClockIcon";
export function Description({ playersCount }) {
  return (
    <>
      <div className={styles.description}>
        <p className={styles.description__backToHome}>На главную</p>
        <h1 className={styles.description__title}>Крестики нолики</h1>
        <div className={styles.description__iconsContainer}>
          <div className={styles.description__star}>
            <StarIcon />
          </div>
          <div className={styles.description__people}>
            <PeopleIcon />
            <p className={styles.description__counterPeople}>{playersCount}</p>
          </div>
          <div className={styles.description__clock}>
            <ClockIcon />
            <p className={styles.description__time}>1 мин на ход</p>
          </div>
        </div>
      </div>
    </>
  );
}
