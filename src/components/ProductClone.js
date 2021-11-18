import React, { memo } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    .product-image {
        position: relative;
        width: 100%;
        height: 200px;
        background: url(${({image}) => image}) no-repeat 50% 50%;
        background-size: cover;
        .favorite, .cart-property {
            position: absolute;
            bottom: 14px;
            right: 14px;
            font-size: 20px;
            width: 40px;
            height: 40px;
            box-shadow: 0px 0px 4px 0px #00000040;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            cursor: pointer;
            background: #fff;
        }
        .cart-property {
            left: 14px;
            font-size: 30px;
            color: #E31E24;
        }
    }
    button {
        min-width: 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 51px;
        background: #E31E24;
        color: #fff;
        border: none;
        :hover {
            background: #2B2A29;
        }
    }
    .stars {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 700;
        svg {
            font-size: 26px;
        }
    }
`

export default memo(function ProductClone({product}) {

    console.log(product.image)
    return (
        <Wrapper image={product.image}>
            <div className="product-image">
                
            </div>
            <span>{product.desc}</span>
            <span>{+product.price * product.order_quantity} p.</span>
        </Wrapper>
    )
})
