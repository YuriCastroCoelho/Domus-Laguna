import styled from 'styled-components';

// ==========================================
// ESTILOS ORIGINAIS DO FAQ (RECRIADOS)
// ==========================================

export const SupportWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

export const FAQItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const Question = styled.div`
  background-color: #f9f9f9;
  padding: 18px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
  }
`;

export const Answer = styled.div`
  padding: 18px 20px;
  background-color: #fff;
  color: #555;
  line-height: 1.6;
  border-top: 1px solid #eaeaea;
`;

// ==========================================
// NOVOS ESTILOS DO CHAT DE SUPORTE
// ==========================================

export const ChatTriggerButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
  
  &:hover { 
    background-color: #0056b3; 
  }
`;

export const ChatWindow = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 450px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 5px 25px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

export const ChatHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h4 { 
    margin: 0; 
    font-size: 16px;
  }
`;

export const ChatBody = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #f5f7f9;
  display: flex;
  flex-direction: column;
`;

export const ChatFooter = styled.form`
  display: flex;
  padding: 12px;
  background: white;
  border-top: 1px solid #eaeaea;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  
  &:focus {
    border-color: #007bff;
  }
`;

export const SendButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  
  &:hover {
    color: #0056b3;
  }
`;