import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

import UserInfo from "../../info-stats/user-info/user-info";
import StepsStats from "../../info-stats/steps/steps";
import WorkoutStats from "../../info-stats/workout/workout";
import NutritionStats from "../../info-stats/nutrition/nutrition";

const UserData = ({ user }) => {
  const {
    userId,
    name,
    email,
    stepsWalked,
    stepsTarget,
    performedDate,
    scheduledDate,
    feedback,
    ...nutritionStats
  } = user;

  return (
    <li className={styles.container}>
      <div className={styles.userInfo}>
        <UserInfo name={name} email={email} />
      </div>

      <div className={styles.stats}>
        <div>
          <StepsStats
            userId={userId}
            walked={stepsWalked}
            target={stepsTarget}
          />
        </div>

        <div>
          <WorkoutStats
            userId={userId}
            performed={performedDate}
            scheduled={scheduledDate}
            feedback={feedback}
          />
        </div>

        <div>
          <NutritionStats userId={userId} {...nutritionStats} />
        </div>
      </div>

      <div className={styles.alert}>
        <Button>
          <ICONS.BellIcon />
        </Button>
      </div>
    </li>
  );
};

export default UserData;
