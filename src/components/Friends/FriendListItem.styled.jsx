import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px var(--bg-grey);
  :hover {
    box-shadow: 2px 2px 10px var(--grey);
  }
  :focus {
    box-shadow: 2px 2px 10px var(--grey);
  }
`;

export { List };