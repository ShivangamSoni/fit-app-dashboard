import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

const WorkoutStats = ({ userId, performed, scheduled, link = true }) => {
  return (
    <div className={styles.workout}>
      <div className={styles.workout__info}>
        <span>
          <ICONS.CheckIcon />
          <span>{performed}</span>
        </span>

        <span>
          <ICONS.ScheduleIcon />
          <span>{scheduled}</span>
        </span>
      </div>

      {link && (
        <div className={styles.workout__btn}>
          <Button type="link" to={`/${userId}/workout`}>
            <ICONS.ArrowIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default WorkoutStats;
