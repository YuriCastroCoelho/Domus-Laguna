import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #0056b3;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const ContentGrid = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainInfo = styled.div`
  flex: 2;
`;

export const Sidebar = styled.div`
  flex: 1;
`;

export const PropertyType = styled.span`
  background: #e9ecef;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #555;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 10px 0;
  color: #222;
`;

export const Address = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

export const FeaturesBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  
  span:first-child {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  
  span:last-child {
    font-size: 0.9rem;
    color: #555;
    font-weight: bold;
  }
`;

export const DescriptionSection = styled.div`
  line-height: 1.6;
  color: #444;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #222;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }
`;

export const ContactCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid #eee;
  position: sticky;
  top: 20px;
`;

export const Price = styled.h2`
  font-size: 2.2rem;
  color: #0056b3;
  margin: 0 0 20px 0;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #25D366; 
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background 0.2s;

  &:hover {
    background: #1ebc5a;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: white;
  color: #0056b3;
  border: 2px solid #0056b3;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f7ff;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  
  h3 {
    margin-top: 0;
    color: #222;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 15px 0;
  font-family: inherit;
  resize: vertical;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background: white;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background: #0056b3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: #004494;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #444;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;
  
  > div {
    flex: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0;
  }

  
`;
// ... (cole isso no final do arquivo DetalhesImovelStyles.js)

export const ReviewSection = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #eee;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #222;
  }
`;

export const ReviewForm = styled.form`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;

  h4 {
    margin: 0 0 15px 0;
    color: #333;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    
    strong { color: #333; }
  }

  p {
    margin: 0 0 10px 0;
    color: #555;
    line-height: 1.4;
  }

  small {
    color: #999;
  }
`;

export const Stars = styled.span`
  color: #FFD700; /* Cor amarela padrão de estrelas */
  font-size: 1.2rem;
  letter-spacing: 2px;
`;