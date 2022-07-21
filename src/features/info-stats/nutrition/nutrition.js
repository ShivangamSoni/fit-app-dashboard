import { PieChart } from "react-minimal-pie-chart";

import { useUsersCtx } from "../../../context/UsersContext";

import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";
import Target from "../../../components/target/target";

const NutritionStats = ({
  userId,
  calorieIntake,
  calorieTarget,
  proteinConsumed,
  proteinTarget,
  carbConsumed,
  carbTarget,
  fatConsumed,
  fatTarget,
}) => {
  const { incrementCalories, decrementCalories } = useUsersCtx();

  return (
    <div className={styles.nutrition}>
      <div className={styles.nutrition__chart}>
        <PieChart
          data={[
            {
              title: "Protein",
              value: proteinConsumed,
              color: "var(--accent-pink)",
            },
            {
              title: "Fats",
              value: fatConsumed,
              color: "var(--accent-yellow)",
            },
            {
              title: "Carbs",
              value: carbConsumed,
              color: "var(--accent-blue)",
            },
          ]}
          totalValue={proteinTarget + fatTarget + carbTarget}
          lineWidth={25}
          startAngle={-90}
          background="var(--text)"
          animate
          reveal={100}
        />
        <div className={styles.chart__info}>
          <span>{calorieIntake}</span>
          <span>calories</span>
        </div>
      </div>

      <Target
        value={calorieTarget}
        handlePlus={() => incrementCalories(userId)}
        handleMinus={() => decrementCalories(userId)}
      />

      <div className={styles.nutrition__btn}>
        <Button type="link" to={`/${userId}/nutrition`}>
          <ICONS.ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default NutritionStats;
