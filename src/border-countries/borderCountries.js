import React from "react";
import { useNavigate } from "react-router-dom";
import "./borderCountries.css";

export default function BorderCountries({ borderCountries }) {
  const navigate = useNavigate();

  const validBorderCountries = Array.isArray(borderCountries)
    ? borderCountries
    : [];
  return (
    <div>
      <h2>Border Countries</h2>
      <p>List of countries that have boder with the choosed country.</p>
      <div className="container-father">
        {validBorderCountries.length > 0 ? (
          validBorderCountries.map((country, index) => (
            <div className="country-card-border" key={index}>
              <button
                className="country-border-button"
                onClick={() => navigate(`/countryInfos/${country.commonName}`)}
              >
                {country.commonName}
              </button>
            </div>
          ))
        ) : (
          <li>No border countries available</li>
        )}
      </div>
    </div>
  );
}
