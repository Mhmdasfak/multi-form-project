import React, { useState } from "react";
import styled from "styled-components";
import bgImg from "@/assets/images/bg-sidebar-desktop.svg";
import MenuLink from "@/components/MenuLink";
const ActiveMenuStyled = styled.div`
  position: relative;
  width: 25%;
  height: 100%; // Required to show background: ;
  color: #fff;
  text-transform: uppercase;

    .menu-list{
      position: relative;
      padding: 1.5rem 2.5rem;
      z-index: 1;
  }
`;

const BgImageStyled = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100%);
  object-fit: cover;
  pointer-events: none;
  z-index: 0;
  border-radius: 12px;

`;
const ActiveMenu = ({menuList,activeTitle}) => {
    return (
        <ActiveMenuStyled>
            <BgImageStyled src={bgImg} alt="Decorative" />
            <div className="menu-list">
              {menuList.map(menu=><MenuLink key={menu.index} activeTitle={activeTitle} index={menu.index} title={menu.title}/>)}
                
            </div>
        </ActiveMenuStyled>
    );
};

export default ActiveMenu;
