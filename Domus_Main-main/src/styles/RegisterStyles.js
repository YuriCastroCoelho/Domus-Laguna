import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 25px;
  font-size: 14px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  background-color: #f1f3f5;
  border-radius: 8px;
  padding: 5px;
  margin-bottom: 25px;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${(props) => (props.active ? "#0056b3" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#555")};

  &:hover {
    color: ${(props) => (props.active ? "white" : "#0056b3")};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #0056b3;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export const LoginLink = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  a {
    color: #0056b3;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;