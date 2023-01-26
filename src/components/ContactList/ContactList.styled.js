import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-left: 20px;
  max-width: 450px;

  margin: 0 auto;
`;

export const ButtonDelete = styled.button`
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0 16px 0 16px;

  border: none;

  font: inherit;
  width: 100px;
  height: 35px;

  cursor: pointer;

  border: 2px solid #e6b0aa;
  border-radius: 3px;
  background-color: #e6b0aa;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #ff9999;
    color: #ffff;
    border: 2px solid #ff9999;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  font-size: 20px;
  align-items: center;
  // gap: 10px;
  justify-content: space-between;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
