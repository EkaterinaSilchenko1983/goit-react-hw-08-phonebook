import styled from 'styled-components';

export const FormContact = styled.form`
  width: 320px;
  margin: 0 auto;
  // text-align: center;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
`;

export const InputText = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 2px solid #ff9999;
  border-radius: 3px;
  margin-bottom: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const ButtonForm = styled.button`
  display: inline-block;
  justify-content:
  font: inherit;
  width: 100%;
  height: 35px;
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
