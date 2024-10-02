import React from "react";

export default function BorderCountries({ borderCountries, navigate }) {
  return (
    <div>
      <h2>Border Countries</h2>
      <ul>
        {borderCountries.map((country, index) => (
          <li key={index}>
            <button onClick={() => navigate(`/country/${country}`)}>
              {country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
