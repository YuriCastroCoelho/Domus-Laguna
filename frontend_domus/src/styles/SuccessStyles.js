import styled from 'styled-components';

export const SuccessWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const IconCircle = styled.div`
  width: 100px;
  height: 100px;
  background: #dcfce7;
  color: #15803d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-bottom: 30px;
`;

export const ActionButton = styled.button`
  margin-top: 30px;
  padding: 15px 40px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
`;