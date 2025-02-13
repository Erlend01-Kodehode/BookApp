import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const FetchContext = createContext();
export const ApiContext = createContext();
export const DataContext = createContext();

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
