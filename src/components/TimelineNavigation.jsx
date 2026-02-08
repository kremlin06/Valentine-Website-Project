import React from 'react';
import styled from 'styled-components';


const TimelineNavigation = ({ currentStep, totalSteps, onNavigate }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100; // calculate the progress percentage based on the current step and total steps, adding 1 to currentStep because it is zero-indexed

  return (
    <TimelineNavContainer>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>
        Our Journey Timeline
      </h3>
      <ProgressContainer>
        <ProgressBar progress={progress} />
      </ProgressContainer>
      <MilestoneDots>
        {[...Array(totalSteps)].map((_, index) => (
          <Dot
            key={index}
            active={index === currentStep}
            onClick={() => onNavigate(index)}
          />
        ))}
      </MilestoneDots>
      <CurrentMilestone>
        Milestone {currentStep + 1} of {totalSteps}
      </CurrentMilestone>
    </TimelineNavContainer>
  );
};

const TimelineNavContainer = styled.div`
  position: sticky;
  top: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 20px 30px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border: 2px solid #ffb6c1;

  @media (max-width: 768px) {
    padding: 15px 20px;
    margin: 15px;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  background: #e0e0e0;
  border-radius: 10px;
  height: 10px;
  margin: 15px 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #ee5a24);
  border-radius: 10px;
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease;
`;

const MilestoneDots = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#ff6b6b' : '#ccc')};
  border: 2px solid ${(props) => (props.active ? '#fff' : 'transparent')};
  cursor: pointer;
  transition: all 0.3s ease;
  ${(props) => props.active && `
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3);
  `}

  &:hover {
    transform: scale(1.2);
    background: #ff6b6b;
  }
`;

const CurrentMilestone = styled.div`
  text-align: center;
  font-weight: bold;
  color: #ff6b6b;
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default TimelineNavigation;
