import { FlagIcon } from "./FlagIcon";
import "./Title.css";

export function Title({ gender, title, firstName, lastName, countryCode }) {
  return (
    <h4 className="title">
      <span className="genderIcon">{gender === "female" ? "♀️" : "♂️"}</span>
      {title} {firstName} {lastName}
      <FlagIcon countryCode={countryCode} />
    </h4>
  );
}
