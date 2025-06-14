import React from "react";
import styled from "styled-components";

const MenuLink = ({activeTitle,index,title}) => {
    const StyledMenuLink = styled.div`
        color: #f1eaea;
        background: transparent;
        display: flex;
        gap: 1.25rem;
        font-weight: 500;
        margin-bottom: 2rem;
        cursor: pointer;
        &:hover,&.active{
            .step-number{
                background-color:#bee3ff;
                color: #04254d;
            }
            
        }
        .step-number{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            width: 2rem;
            height: 2rem;
            font-size: .75rem;
            border: 1px solid #f1eaea;
            color: #f1eaea;
        }

        .step-details{
            height: 1.75rem;
            font-size: 12px;

        }
        .step-details-top{
            font-weight: 400;
            margin-bottom: 0.25rem;
            color: #9795ff;
        }
    `;
    return (
        <StyledMenuLink className={activeTitle==index&&'active'}>
            <div className="step-number">{index}</div>
            <div className="step-details">
                <div className="step-details-top">STEP {index}</div>
                <div className="step-details-bottom">{title}</div>
            </div>
        </StyledMenuLink>
    );
};

export default MenuLink;
