import styles from "./styles.module.css";

import UserTable from "../user-table/user-table";

const DashPanel = () => {
  return (
    <div className={styles.panel}>
      <UserTable />

      <p className={styles.message}>No Data Found</p>
    </div>
  );
};

export default DashPanel;
