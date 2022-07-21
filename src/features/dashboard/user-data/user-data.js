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
    ...nutritionStats
  } = user;

  return (
    <tr>
      <td>
        <UserInfo name={name} email={email} />
      </td>

      <td>
        <StepsStats userId={userId} walked={stepsWalked} target={stepsTarget} />
      </td>

      <td>
        <WorkoutStats performed={performedDate} scheduled={scheduledDate} />
      </td>

      <td>
        <NutritionStats userId={userId} {...nutritionStats} />
      </td>

      <td>
        <div className={styles.alert}>
          <Button>
            <ICONS.BellIcon />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UserData;
