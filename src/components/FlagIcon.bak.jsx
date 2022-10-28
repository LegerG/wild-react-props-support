import "./FlagIcon.css";

export function FlagIcon({ countryCode }) {
  return (
    <span className="flagIcon">
      <img
        src={`https://flagcdn.com/20x15/${countryCode?.toLowerCase()}.png`}
        alt={countryCode}
      />
    </span>
  );
}
