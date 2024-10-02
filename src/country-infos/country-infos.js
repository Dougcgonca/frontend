import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryInfos() {
  const url = "http://localhost:3000/countries";
  const { name } = useParams();

  const [borderList, setBorderList] = useState([]);
  const [countryCode, setCountryCode] = useState([]);
  const [countryPopulation, setCountryPopulationData] = useState(null);
  const [countryFlagUrl, steCountryFlagUrl] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/population/${name}`)
      .then((value) => {
        setCountryCode(value.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/${countryCode}`)
      .then((value) => {
        setBorderList(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryCode]);

  useEffect(() => {
    axios
      .get(`${url}/flag/${name}`)
      .then((value) => {
        steCountryFlagUrl(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>country infos</h1>;
}
