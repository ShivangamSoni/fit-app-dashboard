import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

const WorkoutStats = () => {
  return (
    <div className={styles.workout}>
      <div className={styles.workout__info}>
        <span>
          <ICONS.CheckIcon />
          <span>16 Oct</span>
        </span>

        <span>
          <ICONS.ScheduleIcon />
          <span>22 Oct</span>
        </span>
      </div>

      <div className={styles.workout__btn}>
        <Button>
          <ICONS.ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default WorkoutStats;
