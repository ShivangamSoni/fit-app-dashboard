import { useUsersCtx } from "../../../context/UsersContext";

import styles from "./styles.module.css";

import UserTable from "../user-table/user-table";

const DashPanel = () => {
  const { users } = useUsersCtx();

  return (
    <div className={styles.panel}>
      {users.length > 0 ? (
        <UserTable users={users} />
      ) : (
        <p className={styles.message}>No Data Found</p>
      )}
    </div>
  );
};

export default DashPanel;
