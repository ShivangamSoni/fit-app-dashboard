import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

import UserInfo from "../../info-stats/user-info/user-info";
import StepsStats from "../../info-stats/steps/steps";
import WorkoutStats from "../../info-stats/workout/workout";
import NutritionStats from "../../info-stats/nutrition/nutrition";

const UserData = () => {
  return (
    <tr>
      <td>
        <UserInfo />
      </td>

      <td>
        <StepsStats />
      </td>

      <td>
        <WorkoutStats />
      </td>

      <td>
        <NutritionStats />
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
