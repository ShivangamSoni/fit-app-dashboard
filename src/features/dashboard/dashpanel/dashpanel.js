import styles from "./styles.module.css";

import UserTable from "../user-table/user-table";

import USER_DATA from "../../../data/UserData.json";

const DashPanel = () => {
  return (
    <div className={styles.panel}>
      {USER_DATA.length > 0 ? (
        <UserTable users={USER_DATA} />
      ) : (
        <p className={styles.message}>No Data Found</p>
      )}
    </div>
  );
};

export default DashPanel;
