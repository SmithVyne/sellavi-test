import React, { useContext, useMemo } from 'react'
import styled from 'styled-components';
import { GlobalContext } from '../components/App'
import Product from '../components/Product';

const Wrapper = styled.div`
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
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
    const products = useMemo(() => Object.values(cart), [cart])
    const totalPrice = useMemo(() => products.reduce((sum, product) => sum + product.price, 0), [products])
    
    return (
        <Wrapper>
            {products.map(product => <Product product={product} cart={true} />)}
            <div className="bottom">
                <span className="price">{totalPrice}</span>
                <button>Buy Now</button>
            </div>
        </Wrapper>
    )
}
