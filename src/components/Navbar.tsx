/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "./themeContext";
import ThemeToggleButton from "./toggleThemeButton";

const Navbar: React.FC = () => {
  const { theme } = useTheme();

  const navbarStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${theme === "light" ? "#f9f9f9" : "#333"};
    color: ${theme === "light" ? "#000" : "#fff"};
    transition: background-color 0.3s, color 0.3s;
  `;

  const titleStyle = css`
    font-size: 18px;
    font-weight: bold;
  `;

  return (
    <nav css={navbarStyle}>
      <div css={titleStyle}>Song Management App</div>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
