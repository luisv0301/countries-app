import "./dropdown.css";

export default function Dropdown({ setRegion, region }) {
  return (
    <div className="dropdown__container">
      <select onChange={setRegion} value={region} className="dropdown">
        <option value="all">All regions</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <span className="dropdown__arrow" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
}
