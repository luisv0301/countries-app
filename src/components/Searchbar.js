import "./searchbar.css";

export default function Searchbar({ inputValue, searchCountry }) {
  return (
    <form className="searchbar">
      <input
        type="search"
        value={inputValue}
        onChange={searchCountry}
        placeholder="Search for a country..."
        className="searchbar__input"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="searchbar__icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
}
