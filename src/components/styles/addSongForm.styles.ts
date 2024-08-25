import styled from "@emotion/styled";
import { useTheme } from "../themeContext";

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const SongFormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#444")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => (theme === "light" ? "#007bff" : "#0056b3")};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "#0056b3" : "#004494")};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const AddAnotherButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => (theme === "light" ? "#28a745" : "#218838")};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "#218838" : "#1a6932")};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;
