import { PieChart } from "react-minimal-pie-chart";

import styles from "./styles.module.css";

import ICONS from "../../../components/icons/icons";
import Button from "../../../components/button/button";

import abbreviateNumber from "../../../utils/abbreviateNumber";

const NutritionStats = ({
  calorieIntake,
  calorieTarget,
  proteinConsumed,
  proteinTarget,
  carbConsumed,
  carbTarget,
  fatConsumed,
  fatTarget,
}) => {
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

      <div className={styles.nutrition__target}>
        <span>{abbreviateNumber(calorieTarget)}</span>
        <span>target</span>
      </div>

      <div className={styles.nutrition__btn}>
        <Button>
          <ICONS.ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default NutritionStats;
