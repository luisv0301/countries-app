import React from "react";
import Country from "./Country";
import Skeleton from "./Skeleton";

import "./countries.css";

export default React.memo(function Countries({ countries, Loadingcountries }) {
  return (
    <div className="countries">
      {Loadingcountries && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      {countries &&
        countries.map((country, index) => <Country {...country} key={index} />)}
    </div>
  );
})

