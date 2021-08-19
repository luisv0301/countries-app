import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./layout/Home";
import CountryInfo from "./layout/CountryInfo";

function App() {
  const [countriesDefault, setCountriesDefault] = useState(null);
  const [countries, setCountries] = useState([]);
  const [Loadingcountries, setLoadingCountries] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const resp = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await resp.json();
        setLoadingCountries(false);
        setCountries(data);
        setCountriesDefault(data);
      } catch (error) {
        console.log(error);
        setLoadingCountries(false);
      }
    };
    getCountries();
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route
            path="/country/:countryName"
            render={(props) => <CountryInfo countries={countries} {...props} />}
          />
          <Route
            path="/"
            render={(props) => (
              <Home
                countries={countries}
                setCountries={setCountries}
                countriesDefault={countriesDefault}
                Loadingcountries={Loadingcountries}
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
