import styles from "./HikeCard.module.css";

export default function HikeCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Hike Name</h2>
      <p className={styles.details}>Location: Mountain Trail</p>
      <p className={styles.details}>Distance: 5 miles</p>
      <p className={styles.details}>Difficulty: Moderate</p>
    </div>
  );
}
