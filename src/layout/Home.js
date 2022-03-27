import React, { useEffect, useState } from "react";
import useDebounce from "../useDebounce";

import Countries from "../components/Countries";
import ActionsBar from "../components/ActionsBar";
import Dropdown from "../components/Dropdown";
import Searchbar from "../components/Searchbar";

import "./home.css";

export default function Home({
  setCountries,
  countries,
  countriesDefault,
  Loadingcountries,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [isResultFound, setIsResultFound] = useState(true);
  const [region, setRegion] = useState("all");
  const debouncedValue = useDebounce(searchValue, 350)

  console.log("valor de search", searchValue)
  useEffect(() => {
    setIsResultFound(true);
    if (debouncedValue) {
      const searchedCountry = countriesDefault.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      searchedCountry.length > 0
        ? setCountries(searchedCountry)
        : setIsResultFound(false);
    } else {
      console.log("reseteando...")
      setCountries(countriesDefault);
    }
  }, [debouncedValue]);

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
        {isResultFound ? (
          <Countries
            countries={countries}
            Loadingcountries={Loadingcountries}
          />
        ) : (
          <h1 className="home__title">Sorry, country not found.</h1>
        )}
      </main>
    </div>
  );
}
