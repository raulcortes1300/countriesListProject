import React, { useEffect, useState } from "react";

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px 0",
    borderBottom: "1px solid #dee2e6",
    display: "flex",
    alignItems: "center",
  },
  flag: {
    width: "30px",
    height: "20px",
    marginRight: "10px",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    overflowX: "auto", // Allows horizontal scrolling if needed
  },
  pagination: {
    display: "flex",
    flexWrap: "wrap", // Allows buttons to wrap to the next line if needed
    justifyContent: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    margin: "5px", // Adds some space between buttons
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  activeButton: {
    backgroundColor: "#0056b3",
  },
};

export const ListOfCountries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        const sortedCountries = result.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(countries);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          style={
            currentPage === i
              ? { ...styles.button, ...styles.activeButton }
              : styles.button
          }
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={styles.container}>
      <h1>Countries</h1>
      <ul style={styles.list}>
        {currentCountries.map((country) => (
          <li key={country.cca3} style={styles.listItem}>
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              style={styles.flag}
            />
            {country.name.common}
          </li>
        ))}
      </ul>
      <div style={styles.paginationContainer}>
        <div style={styles.pagination}>{renderPageNumbers()}</div>
      </div>
    </div>
  );
};
