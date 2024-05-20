import "./App.css";
import CountryDetails from "./components/CountryDetails";
import { HomePage } from "./components/HomePage";
import { ListOfCountries } from "./components/ListOfCountries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/countries" element={<ListOfCountries />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
