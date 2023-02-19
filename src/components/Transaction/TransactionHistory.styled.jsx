import styled from '@emotion/styled';

export const Table = styled.table`
  width: 50%;
  margin: 20px auto;
  text-align: center;
  :hover {
    box-shadow: 2px 2px 10px var(--grey);
  }
  :focus {
    box-shadow: 2px 2px 10px var(--grey);
  }
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: var(--bleu);
  color: white;
`;

export const HeadTableData = styled.th`
  padding: 10px 0;
  outline: 1px solid var(--bg-grey);
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #806ee2;
  }
`;

export const TableData = styled.td`
  padding: 10px 0;
  outline: 1px solid var(--bg-grey);
`;