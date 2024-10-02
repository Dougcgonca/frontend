import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./countryInfos.css";
import axios from "axios";
import PopulationChart from "../population-chart/populationChart";
import BorderCountries from "../border-countries/borderCountries";

export default function CountryInfos() {
  const url = "http://localhost:3000/countries";
  const { name } = useParams();
  const navigate = useNavigate();

  const [borderList, setBorderList] = useState();
  const [countryCode, setCountryCode] = useState([]);
  const [countryPopulation, setCountryPopulationData] = useState(null);
  const [countryFlagUrl, steCountryFlagUrl] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/population/${name}`)
      .then((value) => {
        console.log(name);
        setCountryCode(value.data.code);
        setCountryPopulationData(value.data.populationCounts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  useEffect(() => {
    if (countryCode) {
      axios
        .get(`${url}/${countryCode}`)
        .then((response) => {
          setBorderList(response.data.borders);
          console.log(response.data.borders);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countryCode]);

  useEffect(() => {
    axios
      .get(`${url}/flag/${name}`)
      .then((value) => {
        steCountryFlagUrl(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <div>
      <div className="country-top">
        <h2>{name}</h2>
        <div>
          <img src={countryFlagUrl} alt={(name, "flag")} />
          <p></p>
        </div>
      </div>
      <div className="population-chart">
        <PopulationChart populationData={countryPopulation} />
      </div>
      <div>
        <BorderCountries borderCountries={borderList} />
      </div>
      <div className="btn-go-back">
        <button onClick={() => navigate("/")}> Go Back to List</button>
      </div>
    </div>
  );
}
