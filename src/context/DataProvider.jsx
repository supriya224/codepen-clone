import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  
  return (
    <DataContext.Provider
      value={{
        //its use for definig value in provider
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider> // its use for export consumer provider
  );
};

export default DataProvider;
