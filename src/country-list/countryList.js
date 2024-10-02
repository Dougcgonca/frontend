import axios from "axios";
import { useEffect, useState } from "react";
import "./countryList.css";
import { useNavigate } from "react-router-dom";

export default function CountryList() {
  const url = "http://localhost:3000/countries";
  const navigate = useNavigate();

  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((value) => {
        setListCountry(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!listCountry && <p>Loadig data...</p>}
      <div className="container-father">
        {listCountry.map((value, index) => (
          <div key={index} className="country-card">
            <button onClick={() => navigate(`/countryInfos/${value.name}`)}>
              {value.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
