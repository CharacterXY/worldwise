import styles from "./CityItem.module.css";
import "flag-icon-css/css/flag-icons.css";
import { Link } from "react-router-dom";

function CityItem({ city }) {
  const { cityName, emoji, date, id } = city;

  const currentDate = new Date(date).toDateString("HR-hr");

  console.log(emoji.toLowerCase());

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <span className={`flag-icon flag-icon-${emoji.toLowerCase()}`}></span>
        <h3 className={styles.h3}>{cityName}</h3>
        <time className={styles.date}>({currentDate})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
