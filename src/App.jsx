import styled from 'styled-components'
import './App.css'
import LayoutWrapper from './layout/LayoutWrapper'
import ActiveMenu from './section/ActiveMenu'
import Tabview from './section/Tabview'
import { useEffect, useState } from 'react'
import PersonalInfo from './section/PersonalInfo'

function App() {
  const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eef5ff;
  `;
  const menuList = [{index:1,title:'Your Info',tabTitle:'Personal Info',tabDescription:'Please provide your name,email address and phone number',tabElement:PersonalInfo},{index:2,title:'Select Plans'},{index:3,title:'Add-ons'},{index:4,title:'Summary'}]
  const [activeTitle,setActiveTitle] = useState(1)
  const [menu,setMenu] = useState(menuList.find(menu=>menu.index==activeTitle))
useEffect(()=>{
setMenu(menuList.find(menu=>menu.index==activeTitle))
},[activeTitle])
  return (
    <MainContainer>
      <LayoutWrapper>
        <ActiveMenu menuList={menuList} activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
        <Tabview  menu={menu} activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
      </LayoutWrapper>
    </MainContainer>
  )
}

export default App
