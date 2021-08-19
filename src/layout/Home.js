import React, { useEffect, useState } from "react";

import Countries from "../components/Countries";
import ActionsBar from "../components/ActionsBar";
import Dropdown from "../components/Dropdown";
import Searchbar from "../components/Searchbar";

import "./home.css";

export default function Home({
  setCountries,
  countriesDefault,
  countries,
  Loadingcountries,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("all");
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (searchValue) {
      setResult(false);
      const searchedCountry = countriesDefault.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      searchedCountry.length > 0
        ? setCountries(searchedCountry)
        : setResult(true);
    } else {
      setResult(false);
      setCountries(countriesDefault);
    }
  }, [searchValue]);

  useEffect(() => {
    if (region === "all") return setCountries(countriesDefault);
    const filteredCountries = countriesDefault.filter(
      (country) => country.region.toLowerCase() === region
    );
    setCountries(filteredCountries);
  }, [region]);

  return (
    <div className="home">
      <ActionsBar>
        <Searchbar
          inputValue={searchValue}
          searchCountry={(e) => setSearchValue(e.target.value)}
        />
        <Dropdown
          region={region}
          setRegion={(e) => setRegion(e.target.value)}
        />
      </ActionsBar>
      <main>
        {result ? (
          <h1 className="home__title">Sorry, country not found.</h1>
        ) : (
          <Countries
            countries={countries}
            Loadingcountries={Loadingcountries}
          />
        )}
      </main>
    </div>
  );
}
