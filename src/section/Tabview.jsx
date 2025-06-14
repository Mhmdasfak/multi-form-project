import React from "react";
import styled from "styled-components";
import ContentFooter from "./ContentFooter";

const Tabview = ({menu,activeTitle,setActiveTitle}) => {
  const StyledTabView = styled.div`
    padding: 1.25rem;
    width: 75%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 2rem 4rem;
    .title{
      font-size: 24px;
      margin-bottom: .25rem;
      color: #04254d;
    }
    .description{
      font-size: 12px;
      color: #b3b4bb;
      font-weight: 400;
    }
    .tab-content{
      margin-top: 2rem;
      flex-grow: 1;
    }
  `
  const TabElement = menu.tabElement
  return <StyledTabView>
    <div className="title">{menu.tabTitle}</div>
    <div className="description">{menu.tabDescription}</div>
    <div className="tab-content">
    <TabElement/></div>
    <ContentFooter activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
  </StyledTabView>;
};

export default Tabview;
