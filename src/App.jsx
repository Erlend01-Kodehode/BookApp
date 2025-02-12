import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { apiGeneral } from "./Data/api";

export const ApiContext = createContext();

function App() {
  const [apiFetch, setApiFetch] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      if (apiFetch != null) {
        try {
          const response = await fetch(apiFetch);
          if (!response.ok) {
            throw new Error(`HTTP error. Status ${response.status}`);
          }
          const result = await response.json();
          setApiData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [apiFetch]);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <>
      <ApiContext.Provider
        value={([apiFetch, setApiFetch], [apiData, setApiData])}
      >
        <Header />
        <Outlet />
        <Footer />
      </ApiContext.Provider>
    </>
  );
}

export default App;
