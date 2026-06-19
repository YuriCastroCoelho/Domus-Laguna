import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  background-color: #0f172a;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PaymentCard = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
`;

export const PlanSummary = styled.div`
  background: #f1f5f9;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  border-left: 5px solid #2563eb;
  h4 { margin: 0; color: #64748b; font-size: 0.9rem; text-transform: uppercase; }
  h2 { margin: 5px 0 0; color: #1e293b; }
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #334155;
  font-size: 0.9rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 1rem;
  &:focus { border-color: #2563eb; outline: none; }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: #1d4ed8; transform: translateY(-2px); }
`;