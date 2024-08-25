import styled from "@emotion/styled";
import { useTheme } from "../themeContext";  // Ensure this is imported if using the hook

export const FilterContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#555")};
  border-radius: 5px;
  background-color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FilterInput = styled.input`
  width: calc(100% - 24px);
  padding: 10px;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#555")};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#444")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
