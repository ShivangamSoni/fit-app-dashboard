import { useParams } from "react-router-dom";

import { useUsersCtx } from "../../context/UsersContext";

import styles from "./styles.module.css";

import WorkoutStats from "../info-stats/workout/workout";

const WorkoutDetails = () => {
  const { users } = useUsersCtx();
  const { userId } = useParams();

  const { performedDate, scheduledDate } = users.find(
    (user) => user.userId === userId,
  );

  return (
    <div className={styles.workout}>
      <WorkoutStats
        userId={userId}
        performed={performedDate}
        scheduled={scheduledDate}
        link={false}
      />
    </div>
  );
};

export default WorkoutDetails;
