import { PieChart } from "react-minimal-pie-chart";

import { useUsersCtx } from "../../../context/UsersContext";

import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";
import Target from "../../../components/target/target";
import Tooltip from "../../../components/tooltip/tooltip";
import NutritionMacros from "../nutrition-macros/nutrition-macros";

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
  link = true,
}) => {
  const { incrementCalories, decrementCalories } = useUsersCtx();

  const macroStats = [
    {
      id: 1,
      title: "Protein",
      target: proteinTarget,
      value: proteinConsumed,
      color: "var(--accent-pink)",
    },
    {
      id: 2,
      title: "Fats",
      target: fatTarget,
      value: fatConsumed,
      color: "var(--accent-blue)",
    },
    {
      id: 3,
      title: "Carbs",
      target: carbTarget,
      value: carbConsumed,
      color: "var(--accent-yellow)",
    },
  ];

  return (
    <div className={styles.nutrition}>
      <Tooltip
        content={<NutritionMacros stats={macroStats} />}
        tipColor="var(--bg-300)"
      >
        <div className={styles.nutrition__chart}>
          <PieChart
            data={macroStats}
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
      </Tooltip>

      <Target
        value={calorieTarget}
        handlePlus={() => incrementCalories(userId)}
        handleMinus={() => decrementCalories(userId)}
      />

      {link && (
        <div className={styles.nutrition__btn}>
          <Button type="link" to={`/${userId}/nutrition`}>
            <ICONS.ArrowIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default NutritionStats;
