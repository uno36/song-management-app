import styled from "@emotion/styled";
import { useTheme } from "../themeContext";  // Ensure this is imported if using the hook

export const StatisticsContainer = styled.div`
  max-width: 90%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#555")};
  border-radius: 5px;
  background-color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#ddd")};

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => (theme === "light" ? "#555" : "#bbb")};
  margin-top: 15px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;

  li {
    padding: 8px 0;
    border-bottom: 1px solid ${({ theme }) => (theme === "light" ? "#ddd" : "#555")};
    font-size: 16px;
    color: ${({ theme }) => (theme === "light" ? "#444" : "#ccc")};

    @media (min-width: 768px) {
      font-size: 18px;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StatLabel = styled.span`
  font-weight: bold;
`;

export const StatValue = styled.span`
  font-size: 16px;
  color: ${({ theme }) => (theme === "light" ? "#007bff" : "#66b2ff")};
`;
