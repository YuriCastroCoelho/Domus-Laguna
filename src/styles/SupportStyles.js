import styled from 'styled-components';

export const SupportWrapper = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
`;

export const FAQItem = styled.div`
  background: white;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

export const Question = styled.div`
  padding: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background: #f8fafc;
`;

export const Answer = styled.div`
  padding: 20px;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  line-height: 1.6;
`;