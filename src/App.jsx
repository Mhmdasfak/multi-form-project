import styled from 'styled-components'
import './App.css'
import LayoutWrapper from './layout/LayoutWrapper'
import ActiveMenu from './section/ActiveMenu'
import Tabview from './section/Tabview'

function App() {
  const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eef5ff;
  `;
  return (
    <MainContainer>
      <LayoutWrapper>
        <ActiveMenu/>
        <Tabview />
      </LayoutWrapper>
    </MainContainer>
  )
}

export default App
