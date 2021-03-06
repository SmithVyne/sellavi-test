import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { auth, firestore } from '../globals/firebase';
import { doc, setDoc } from '@firebase/firestore';

const Wrapper = styled.div`
    width: 500px;
    max-width: 100%;
    height: fit-content;
    margin-top: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none; 
    .options {
        display: flex;
        gap: 20px;
        align-items: center;
        font-size: 17px;
        color: #E31E24;
        span {
            cursor: pointer;
        }
        .selected {
            border-bottom: 1px solid #E31E24;
        }
    }
    form {
        width: 100%;
        height: fit-content;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-top: 10px;
        padding: 30px;
        .field {
            display: flex;
            flex-direction: column;
            width: 100%;
            input {
                background: #F5F5F5;
                outline: none;
                box-sizing: border-box;
                width: 100%;
                height: 41px;
                border: 1px solid ;
                padding: 10px 0 12px 21px;
            }
        }
        button {
            padding: 0 34px;
            background: #E31E24;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: 700;
            height: 41px;
            display: flex;
            align-items: center;
            :disabled {
                cursor: not-allowed;
                background: darkred;
            }
        }
        .changeState {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

const AccountTypes = ["Merchant", "Employee"];

export default function Authentication() {
    const [type, setType] = useState(AccountTypes[0].toLowerCase());
    const [state, setState] = useState("login");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("")
        if(state === "login") {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .catch(() => {setError("Invalid username or password"); setLoading(false)})
        } 
        else if(state === "signup") {
            if(passwordRef.current.value !== confirmPasswordRef.current.value) {
                return setError("Passwords do not match")
            }
            
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then(({user}) => {
                    setDoc(doc(firestore, 'users/'+user.uid), {
                        type
                    })
                })
                .catch(() => {setError("Failed to create user"); setLoading(false)})
        }
    }

    useEffect(() => {
        setError("")
    }, [state])

    return (
        <Wrapper>
            <div className="options">
                {state === "signup" && AccountTypes.map(item => 
                    <span key={item} onClick={()=>setType(item.toLowerCase())} className={`${item.toLowerCase() === type ? "selected" : ""}`}>{item} {state}</span>)
                }
            </div>
            <form onSubmit={handleSubmit}>
                <span className="field">
                    <label>email</label>
                    <input ref={emailRef} type="email" autoComplete="username" />
                </span>
                <span className="field">
                    <label>????????????</label>
                    <input ref={passwordRef} type="password" autoComplete="current-password" />
                </span>
                {state === "signup" &&
                    <span className="field">
                        <label>????????????</label>
                        <input ref={confirmPasswordRef} type="password" autoComplete="current-password" />
                    </span>
                }
                <button disabled={loading}>{state === "login" ? "Login" : "Signup"}</button>
                <span>
                    {state === "login" ? "Don't have an account? " : "Do you already have an account? "}
                    <span className="changeState" onClick={()=>setState(state => state === "login" ? "signup" : "login")}> {state === "login" ? "Signup" : "Login"}</span>
                </span>
                <span className="error">
                    {error}
                </span>
            </form>
        </Wrapper>
    )
}
