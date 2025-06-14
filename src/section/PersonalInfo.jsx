import InputField from '@/components/InputField'
import React from 'react'
import styled from 'styled-components'

const PersonalInfo = () => {
    const StyledForm = styled.form`
        
    `
  return (
    <div>
        <StyledForm>
            <InputField label="name" placeholder='e.g. Stephen King' required={true} />
            <InputField label="email" type='email' required={true} placeholder='e.g. stephenking@lorem.com' />
            <InputField label="phone number"  placeholder='e.g. +1 234 567 890' required={true} />
        </StyledForm>
    </div>
  )
}

export default PersonalInfo