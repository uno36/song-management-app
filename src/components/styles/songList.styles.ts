import styled from "@emotion/styled";

export const SongListContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  overflow-x: auto;
  
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid black;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ActionButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span<{ bgColor: string }>`
  visibility: hidden;
  width: 60px;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -30px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ bgColor }) => bgColor} transparent transparent transparent;
  }
`;

export const EditIconWrapper = styled(ActionButton)`
  color: #007bff;

  &:hover {
    background-color: rgba(0, 0, 255, 0.1);
  }
`;

export const DeleteIconWrapper = styled(ActionButton)`
  color: red;

  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

export const EditFormContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const EditInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

export const EditButton = styled(ActionButton)`
  background-color: #28a745;
  color: white;

  &:hover {
    background-color: #218838;
  }

  &.cancel {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const MultiDeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #c82333;
  }

  &:disabled {
    background-color: #e5e5e5;
    color: #aaa;
    cursor: not-allowed;
  }
`;
