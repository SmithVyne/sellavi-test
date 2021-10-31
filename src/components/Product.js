import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    .product-image {
        position: relative;
        .favorite {
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
        }
    }
    button {
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
const Info = styled.span`
    position: absolute;
    top: 0;
    left: -116px;
    transform: rotate(-90deg);
    transform-origin: top right;
    padding: 15px 40px;
    background: #E31E24;
    color: #fff;
`
export default function Product({product}) {
    const {sale, newProd, image, price, desc, rating} = product;
    const stars = rating && Math.floor(rating[0]);
    const [liked, setLiked] = useState(false);
    return (
        <Wrapper>
            <div className="product-image">
                {sale && <Info>SALE</Info>}
                {newProd && <Info>NEW</Info>}
                <img src={image} />
                <span className="favorite" onClick={() => setLiked(val => !val)}>{liked ? <BsHeartFill color="#E31E24" /> : <BsHeart color="#E31E24" />}</span>
            </div>
            <span>{desc}</span>
            <span>{price}</span>
            { stars && 
                <span className="stars">
                    <span>{Array(5).fill(5).map((_, id) => <AiFillStar color={id + 1 <= stars ? "#E31E24" : "#A3A4A5" } />)}</span>
                    <span>{rating[0]} ({rating[1]})</span>
                </span>}
            <button>КУПИТЬ</button>
        </Wrapper>
    )
}
