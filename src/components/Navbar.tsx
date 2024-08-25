/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import ThemeToggleButton from "./toggleThemeButton"; // Ensure this path matches your project structure

const navbarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #000;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
`;

const Navbar: React.FC = () => {
  return (
    <nav css={navbarStyle}>
      <div css={titleStyle}>Song Management App</div>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
