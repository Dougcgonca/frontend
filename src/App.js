import "./App.css";
import CountryList from "./country-list/countryList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryInfos from "./country-infos/country-infos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/countryInfos/:name" element={<CountryInfos />} />
      </Routes>
    </Router>
  );
}

export default App;
