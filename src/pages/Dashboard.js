import { signOut } from '@firebase/auth'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../components/App'
import { auth } from '../globals/firebase'
import Employee from './dashboards/Employee'
import Merchant from './dashboards/Merchant'

const Wrapper = styled.div`
    width: 100%;
    section.body {
        padding: 0 390px;
    }
    .accountInfo {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        padding: 10px;
        .email {

        }
        button.signout {
            padding: 0 34px;
            background: #E31E24;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: 700;
            height: 41px;
            display: flex;
            align-items: center;
        }
    }
`

export default function Dashboard({userType}) {
    const currentUser = useContext(UserContext);

    return (
        <Wrapper>
            <div className="accountInfo">
                <span className="email">{currentUser.email}</span>
                <button onClick={() => signOut(auth)} className="signout">Sign out</button>
            </div>
            <section className="body">
                <h1>{userType[0].toUpperCase()+userType.slice(1)} Dashboard</h1>
                { userType === "employee" ? <Employee /> : <Merchant />}
            </section>
        </Wrapper>
    )
}
