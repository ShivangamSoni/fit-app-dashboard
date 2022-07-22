import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

import epochToDayMonth from "../../../utils/epochToDayMonth";

const WorkoutStats = ({
  userId,
  performed,
  scheduled,
  feedback,
  link = true,
}) => {
  const isScheduleOver = new Date(scheduled) - new Date() <= 0;

  return (
    <div className={styles.workout}>
      <div className={styles.workout__info}>
        <span>
          <ICONS.CheckIcon />
          <span>{epochToDayMonth(performed)}</span>
        </span>

        <span className={`${isScheduleOver && styles["info__schedule--over"]}`}>
          <ICONS.ScheduleIcon />
          <span>{epochToDayMonth(scheduled)}</span>
        </span>
      </div>

      {link && (
        <div
          className={`${styles.workout__btn} ${
            feedback && styles["workout__btn--feedback"]
          }`}
        >
          <Button type="link" to={`/${userId}/workout`}>
            {feedback ? <ICONS.ExclamationIcon /> : <ICONS.ArrowIcon />}
          </Button>
        </div>
      )}
    </div>
  );
};

export default WorkoutStats;
