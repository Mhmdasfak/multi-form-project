import React from 'react'
import styled from 'styled-components'

const ContentFooter = ({activeTitle,setActiveTitle}) => {
    const StyledFooter = styled.div`
        display: flex;
        justify-content: space-between;
        .btn{
            padding: .5rem 1rem;
            border: 1px solid #04254d;
            border-radius: 6px;
            color: #04254d;
        }
        .btn:hover{
            cursor: pointer;
        }
        .next-button{
            background-color: #04254d;
            color: #f1eaea;
        }
    `

  return (
    <StyledFooter>

       <div>{ activeTitle>1&&<div className='btn back-button' onClick={()=>{setActiveTitle(prevState=>prevState-=1)}}> Go Back</div>}</div>
        <div>{activeTitle<4&&<div className='btn next-button' onClick={()=>{setActiveTitle(prevState=>prevState+=1)}}> Next Step</div>}
        {activeTitle==4&&<div className='btn next-button' onClick={()=>{}}> Confirm</div>}
        </div>
    </StyledFooter>
  )
}

export default ContentFooter