import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const data = await response.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country:", error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!country) {
    return <div>No data found</div>;
  }

  return (
    <div className="country-details">
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} className="flag" />
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Language:</strong> {Object.values(country.languages).join(", ")}
      </p>
    </div>
  );
};

export default CountryDetails;
