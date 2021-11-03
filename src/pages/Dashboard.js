import React from 'react'
import styled from 'styled-components'
import Employee from './dashboards/Employee'
import Merchant from './dashboards/Merchant'

const Wrapper = styled.div`
    width: 100%;
`

export default function Dashboard({userType}) {
    return (
        <Wrapper>
            { userType === "employee" ? <Employee /> : <Merchant />}
        </Wrapper>
    )
}
