import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";

import UserData from "../user-data/user-data";

const UserTable = ({ users }) => {
  return (
    <div className={styles.table}>
      <div className={styles.table__head}>
        <div>
          <div className={styles.header}>
            <ICONS.WalkIcon />
            <span>Steps</span>
          </div>

          <div className={styles.header}>
            <ICONS.DumbbellIcon />
            <span>Workout</span>
          </div>

          <div className={styles.header}>
            <ICONS.NutritionIcon />
            <span>Nutrition</span>
          </div>
        </div>
      </div>

      <ol className={styles.table__body}>
        {users.map((user) => (
          <UserData key={user.userId} user={user} />
        ))}
      </ol>
    </div>
  );
};

export default UserTable;
