import styles from "./styles.module.css";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
