import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";

import UserData from "../user-data/user-data";

const UserTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>
            <div>
              <ICONS.WalkIcon />
              <span>Steps</span>
            </div>
          </th>
          <th>
            <div>
              <ICONS.DumbbellIcon />
              <span>Workout</span>
            </div>
          </th>
          <th>
            <div>
              <ICONS.NutritionIcon />
              <span>Nutrition</span>
            </div>
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <UserData />
      </tbody>
    </table>
  );
};

export default UserTable;
