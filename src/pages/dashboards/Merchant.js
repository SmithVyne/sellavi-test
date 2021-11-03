import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
    }
`

export default function Merchant() {
    
    const handleSubmitProduct = () => {

    }
    
    return (
        <Wrapper>
            <h1>Merchant Dashboard</h1>
            <form onSubmit={handleSubmitProduct}>
                <span>New Product</span>
                <div className="field">
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input type="number" />
                </div>
                <div className="field">
                    <label>Image</label>
                    <input type="image" />
                </div>
                <button>Add</button>
            </form>
        </Wrapper>
    )
}
