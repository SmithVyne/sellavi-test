import React, { useContext, useMemo } from 'react'
import styled from 'styled-components';
import { GlobalContext } from '../components/App'
import Product from '../components/Product';

const Wrapper = styled.div`
    margin-top: 50px;
    .products {
        display: grid;
        grid-gap: 50px 45px;
        grid-template-columns: repeat(3, 1fr);
    }
    .bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;
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


export default function Cart() {
    const {cart} = useContext(GlobalContext);
    const totalPrice = useMemo(() => cart.reduce((sum, product) => sum + product.price * product.quantity, 0), [cart])
        
    return (
        <Wrapper>
            <div className="products">
                {cart.map((product, index) => <Product key={product.id} product={product} isCart={true} index={index} />)}
            </div>
            <div className="bottom">
                <button>Buy Now</button>
                <span className="price">{totalPrice} p.</span>
            </div>
        </Wrapper>
    )
}
