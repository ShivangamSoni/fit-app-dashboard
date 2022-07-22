import { useParams } from "react-router-dom";

import { useUsersCtx } from "../../context/UsersContext";

import styles from "./styles.module.css";

import NutritionStats from "../info-stats/nutrition/nutrition";

const NutritionDetails = () => {
  const { users } = useUsersCtx();
  const { userId } = useParams();

  const {
    calorieIntake,
    calorieTarget,
    proteinConsumed,
    proteinTarget,
    carbConsumed,
    carbTarget,
    fatConsumed,
    fatTarget,
  } = users.find((user) => user.userId === userId);

  return (
    <div className={styles.workout}>
      <NutritionStats
        userId={userId}
        {...{
          calorieIntake,
          calorieTarget,
          proteinConsumed,
          proteinTarget,
          fatConsumed,
          fatTarget,
          carbConsumed,
          carbTarget,
        }}
        link={false}
      />
    </div>
  );
};

export default NutritionDetails;
