import React, { useState } from 'react'
import styled from 'styled-components';

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
        }
        .changeState {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export default function Authentication() {
    const [selected, setSelected] = useState(0);
    const [state, setState] = useState("login");

    return (
        <Wrapper>
            <div className="options">
                {["Merchant", "Employee"].map((item, index) => 
                    <span onClick={()=>setSelected(index)} className={`${index === selected ? "selected" : ""}`}>{item} {state}</span>)
                }
            </div>
            <form>
                <span className="field">
                    <label>email</label>
                    <input type="text" autoComplete="username" />
                </span>
                <span className="field">
                    <label>пароль</label>
                    <input type="password" autoComplete="current-password" />
                </span>
                {state === "signup" &&
                    <span className="field">
                        <label>пароль</label>
                        <input type="password" autoComplete="current-password" />
                    </span>
                }
                <button>{state === "login" ? "Login" : "Signup"}</button>
                <span>
                    {state === "login" ? "Don't have an account? " : "Do you already have an account? "}
                    <span className="changeState" onClick={()=>setState(state => state === "login" ? "signup" : "login")}> {state === "login" ? "Signup" : "Login"}</span>
                </span>
            </form>
        </Wrapper>
    )
}
