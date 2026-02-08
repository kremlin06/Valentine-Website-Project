import Timeline from './components/Timeline';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const App = () => {
  return (
    <AppContainer>
      <Timeline />
    </AppContainer>
  );
}

export default App;
