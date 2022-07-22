import styles from "./styles.module.css";

const Stats = ({ title, target, value, color }) => {
  const complete = (value / target) * 100;

  return (
    <div className={styles.stat}>
      <div className={styles.stat__info}>
        <span>{title}</span>
        <span>{target}g</span>
      </div>

      <div
        className={styles.stat__progress}
        style={{
          "--bar": color,
          "--label": complete >= 85 ? "var(--text)" : color,
        }}
      >
        <div
          className={styles.progress__complete}
          style={{
            width: `${complete}%`,
          }}
        >
          <span
            style={{
              transform: `translateY(-50%) translateX(${
                complete >= 85 ? "-100%" : "0"
              })`,
            }}
          >
            {value}g
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
