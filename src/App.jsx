import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const FetchContext = createContext();
export const ApiContext = createContext();
export const DataContext = createContext();

function App() {
  const [apiFetch, setApiFetch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(() => {
    const savedData = localStorage.getItem("ApiMemory");
    if (savedData) {
      setLoading(false);
      setError(false);
    }
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    const fetchData = async () => {
      if (apiFetch != null) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(apiFetch);
          if (!response.ok) {
            throw new Error(`HTTP error. Status ${response.status}`);
          }
          const result = await response.json();
          setApiData(result);
          setError(false);
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
    // console.log(apiData.results);
    localStorage.setItem("ApiMemory", JSON.stringify(apiData));
  }, [apiData]);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Api", apiData.results);
  }, [loading, error, apiData]);

  return (
    <>
      <FetchContext.Provider value={[apiFetch, setApiFetch]}>
        <ApiContext.Provider value={[apiData, setApiData]}>
          <DataContext.Provider value={[loading, setLoading, error, setError]}>
            <Header />
            <Outlet />
            <Footer />
          </DataContext.Provider>
        </ApiContext.Provider>
      </FetchContext.Provider>
    </>
  );
}

export default App;
