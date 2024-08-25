/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "./themeContext";
import { LiaToggleOnSolid } from "react-icons/lia";

const getIconColor = (theme: string) => (theme === "light" ? "#000" : "#fff");
const getHoverColor = (theme: string) => (theme === "light" ? "#555" : "#ddd");

const wrapperStyle = css`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

const iconStyle = (theme: string) => css`
  font-size: 24px; /* Adjust the size as needed */
  color: ${getIconColor(theme)};
  transition: color 0.3s ease;

  &:hover {
    color: ${getHoverColor(theme)};
  }
`;

const tooltipStyle = css`
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} css={wrapperStyle}>
      <LiaToggleOnSolid css={iconStyle(theme)} />
      <div css={tooltipStyle} className="tooltip">
        Light/Dark Theme
      </div>
    </div>
  );
};

export default ThemeToggleButton;
