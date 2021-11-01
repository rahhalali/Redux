import styled from "styled-components";

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;
export const TH = styled.th`
  border: 1px solid #ddd;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aaa2;
  color: white;
  padding: 8px;
`;
export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
}
`;
export const TR = styled.tr`
  &:nth-child(even){
     background-color: #ecd5d5;
  }
  &:nth-child(odd){
     background-color: #ecd5d5;
  }
}
`;
export const Center = styled.td`
  text-align: center;
`;
export const Body = styled.tbody``;
export const Span = styled.span`
  background-color: red;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
`;
