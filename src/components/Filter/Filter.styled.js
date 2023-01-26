import styled from 'styled-components';

export const WrapperFilter = styled.div`
  width: 320px;
  margin: 0 auto;
`;

export const LabelFilter = styled.label`
  margin-bottom: 10px;
  color: #e57373;
  // font-weight: bold;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputFilter = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 2px solid #ff9999;
  border-radius: 3px;
  margin-top: 3px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
