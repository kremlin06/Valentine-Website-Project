import React from 'react';
import styled from 'styled-components';

const MilestoneCard = ({ date, title, message, photoUrl }) => {
  return (
    <CardContainer>
      <DateBadge>{date}</DateBadge>
      <HeartDecoration>♥</HeartDecoration>
      <CardContent>
        <Title>{title}</Title>
        <PhotoContainer>
          {photoUrl ? (
            <img src={photoUrl} alt={title} />
          ) : (
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center' }}>
              Photo from our memories together
            </div>
          )}
        </PhotoContainer>
        <Message>{message}</Message>
      </CardContent>
    </CardContainer>
  );
};

export default MilestoneCard;

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin: 30px auto;
  max-width: 900px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.8s ease-out;
  position: relative;
  overflow: hidden;
  border: 2px solid #ffb6c1;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 25px;
    margin: 20px 15px;
  }
`;

const DateBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 15px;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PhotoContainer = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Message = styled.p`
  color: #555;
  font-size: 18px;
  line-height: 1.8;
  text-align: center;
  margin: 25px 0;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

const HeartDecoration = styled.div`
  position: absolute;
  font-size: 100px;
  color: rgba(255, 107, 107, 0.1);
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(30deg);

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;
