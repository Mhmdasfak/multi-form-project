import React from "react";
import styled from "styled-components";

const MenuLink = ({isActive,index,title}) => {
    const StyledMenuLink = styled.div`
        width: 80%;
        color: #f1eaea;
        background: transparent;
        display: flex;
        gap: 2rem;
        font-weight: 700;
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
            height: 2rem;
        }
        .step-details-top{
            font-weight: 100;
            font-size: 12px;
            margin-bottom: 0.25rem;
        }
    `;
    return (
        <StyledMenuLink cl>
            <div className="step-number">1</div>
            <div className="step-details">
                <div className="step-details-top">STEP 1</div>
                <div className="step-details-bottom">Your Info</div>
            </div>
        </StyledMenuLink>
    );
};

export default MenuLink;
