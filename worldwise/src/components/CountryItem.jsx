import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { emoji } = country;
  return (
    <li className={styles.countryItem}>
      <span className={`flag-icon flag-icon-${emoji.toLowerCase()}`}></span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
