import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MilestoneCard from './MilestoneCard.jsx';
import TimelineNavigation from './TimelineNavigation.jsx';
import milestones from './data/milestoneData.js';

const Timeline = () => { 
  const [currentStep, setCurrentStep] = useState(0);
  // currentStep = 0, showing "The Beginning"
  // setCurrentStep(2), showing "First 'I Miss You'"
  // the navigation component will call setCurrentStep with the index of the milestone to navigate to, and the timeline will scroll to that milestone
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  // initial state is true, showing the scroll indicator when the timeline first loads, and then after 5 seconds, it will hide the scroll indicator by setting showScrollIndicator to false
  // the setShowScrollIndicator will be called in a useEffect hook that runs once when the component mounts, and it will set a timer to hide the scroll indicator after 5 seconds, and it will also clear the timer when the component unmounts to prevent memory leaks

  useEffect(() => {
    const timer = setTimeout(() => { // a timer that will hide the scroll indicator after 5 seconds
      setShowScrollIndicator(false); // cancel the scroll indicator after 5 seconds
    }, 5000); // hide the scroll indicator after 5 seconds

    return () => clearTimeout(timer);
  }, []); // the empty dependency array means this effect will only run once when the component mounts

  const scrollToMilestone = (index) => { 
    setCurrentStep(index); // update the current step to the index of the milestone to navigate to
    const element = document.getElementById(`milestone-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <TimelineContainer>
      <TimelineNavigation
        currentStep={currentStep} // this passes the currentStep state value 0 to the navigation component, TimelineNavigation
        totalSteps={milestones.length} // this counts how many milestones there are in the milestones array and passes that number to the navigation component, TimelineNavigation
        onNavigate={scrollToMilestone} // when the user clicks on a dot in the navigation component, it will call this function to scroll to the corresponding milestone
      />

      {milestones.map((milestone, index) => (
        <div id={`milestone-${index}`} key={index}>
          <MilestoneCard
            date={milestone.date}
            title={milestone.title}
            message={milestone.message}
            photoUrl={milestone.photoUrl}
          />
        </div>
      ))}

      {showScrollIndicator && ( // only show the scroll indicator if showScrollIndicator is true
        <ScrollIndicator>
          <HeartIcon>♥</HeartIcon>
          Scroll to explore our journey
        </ScrollIndicator>
      )}
    </TimelineContainer>
  );
};

export default Timeline;

const TimelineContainer = styled.div`
  min-height: 100vh;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 100px;

  @media (max-width: 768px) {
    padding: 40px 10px;
    padding-top: 80px;
  }
`;

const ScrollIndicator = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 14px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

const HeartIcon = styled.span`
  font-size: 24px;
  margin-bottom: 5px;
  display: block;
`;
