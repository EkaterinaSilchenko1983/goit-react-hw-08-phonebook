import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const ButtonLogout = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  // color: black;
  color: white;
  background-color: #e57373;
  font-weight: 500;
  border: none;
  :last-child {
    margin-right: 50px;
  }
  :first-child {
    margin-right: 20px;
  }
`;
