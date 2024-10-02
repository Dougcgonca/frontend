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
      <h2>Country List</h2>
      <p>
        Here, you can get a lot of data of countries you are interested in it.
      </p>
      <p>
        Please, select the country that you want to see informations, and enjoy!
        :)
      </p>
      {!listCountry && <p>Loading data...</p>}
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
