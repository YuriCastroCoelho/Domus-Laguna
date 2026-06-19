import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 60vh;
  min-height: 450px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80') center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

export const InteractiveArea = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tab = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => (props.active ? "white" : "rgba(0, 0, 0, 0.6)")};
  color: ${(props) => (props.active ? "#333" : "white")};
  border: none;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.active ? "white" : "rgba(0, 0, 0, 0.8)")};
  }
`;

export const ContentBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 0 8px 8px 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  gap: 15px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 8px;
  }
`;

export const Select = styled.select`
  flex: 1;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  width: 100%;
`;

export const Input = styled.input`
  flex: 2;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0056b3;
  }
`;

export const Button = styled.button`
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: #004494;
  }
`;

export const AnnounceMessage = styled.div`
  flex: 2;
  text-align: left;
  color: #333;

  h3 {
    margin: 0 0 5px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;