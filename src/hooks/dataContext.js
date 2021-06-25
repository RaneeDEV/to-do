import { createContext, useReducer, useContext, useEffect } from "react";

const DataContext = createContext();
export const useCovidData = () => useContext(DataContext);
export default function DataProvider({ children }) {
  const [covidData, covidDataDespatch] = useReducer(
    covidDataReducer,
    initialState
  );

  async function getCovidData(url) {
    try {
      const data = await fetch(url).then((r) => r.json());
      covidDataDespatch({ type: "setData", payload: data });
    } catch (error) {
      throw new Error("Invalid active type!");
    }
  }

  function covidDataReducer(state, action) {
    switch (action.type) {
      case "setData":
        return { ...state, data: action.payload };
      default:
        throw new Error("Invalid active type!");
    }
  }
  return (
    <DataContext.Provider value={{ covidData, covidDataDespatch }}>
      {children}
    </DataContext.Provider>
  );
}
