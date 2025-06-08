import React from "react";
import styled from "styled-components";

const LayoutWrapperStyled = styled.div`
    height: 70vh;
    width: 70vw;
    background: #fff;
    display: flex;
    padding:1rem;
    border-radius: 12px;
`;
const LayoutWrapper = ({children}) => {
    return <LayoutWrapperStyled>{children}</LayoutWrapperStyled>;
};

export default LayoutWrapper;
