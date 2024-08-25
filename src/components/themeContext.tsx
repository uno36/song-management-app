import React, { createContext, useContext, useState, ReactNode } from "react";
import { Global, css } from "@emotion/react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyles theme={theme} />
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

const GlobalStyles = ({ theme }: { theme: string }) => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        background-color: ${theme === "dark" ? "#121212" : "#D3D3D3"};
        color: ${theme === "dark" ? "#fff" : "#000"};
        transition: background-color 0.3s, color 0.3s;
      }
      a {
        color: ${theme === "dark" ? "#bb86fc" : "#007bff"};
      }
    `}
  />
);
