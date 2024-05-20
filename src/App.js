import "./App.css";
import { HomePage } from "./components/HomePage";
import { ListOfCountries } from "./components/ListOfCountries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/countries" element={<ListOfCountries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
