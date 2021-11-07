import React, { useContext, useState, useEffect, useCallback, memo } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';
import { GlobalContext } from '../components/App';
import { getDownloadURL, ref } from '@firebase/storage';
import { storage } from '../globals/firebase';
import { usePrevious } from '../hooks';

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

const QuantityControl = styled.span`
    min-width: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 51px;
    span.controls {
        width: 75px;
        height: 100%;
        background: #F5F5F5;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export default memo(function Product({product, isCart=false, dashboard=false}) {
    const {sale, newProd, imageRef, price, desc, rating} = product;
    const stars = rating && Math.floor(rating.stars);
    const [liked, setLiked] = useState(false);
    const {updateCart} = useContext(GlobalContext);
    const [quantity, setQuantity] = useState(isCart || dashboard ? product.quantity: 0);
    const [image, setImage] = useState("");

    useEffect(() => {
        getDownloadURL(ref(storage, imageRef))
        .then(url => setImage(url));
    }, [imageRef])

    const deleteItemFromCart = useCallback(() => {
        updateCart(cart => {
            delete cart[product.id]
            return {...cart}
        })
    }, [product.id, updateCart])

    const previousQuantity = usePrevious(quantity);
    
    useEffect(() => {
        if(!dashboard) {
            if (quantity >= 1 && quantity !== previousQuantity){
                updateCart(cart => ({...cart, [product.id]: {...product, quantity} }))
            } else if(quantity === 0 && quantity !== previousQuantity && isCart) {
                deleteItemFromCart()
            }
        }
    }, [quantity, updateCart, product, previousQuantity, isCart, deleteItemFromCart, dashboard])
    
    return (
        <Wrapper image={image ? image : "https://via.placeholder.com/200x200.png/fff?text=placeholder"}>
            <div className="product-image">
                {sale ? <Info>SALE</Info> : newProd ? <Info>NEW</Info> : null}
                <span className="favorite" onClick={() => setLiked(val => !val)}>{liked ? <BsHeartFill color="#E31E24" /> : <BsHeart color="#E31E24" />}</span>
                {isCart && <span onClick={deleteItemFromCart} className="cart-property"><MdOutlineCancel /></span>}
            </div>
            <span>{desc}</span>
            <span>{quantity ? price * quantity : price} p.</span>
            { stars && 
                <span className="stars">
                    <span>{Array(5).fill(5).map((_, id) => <AiFillStar key={id} color={id + 1 <= stars ? "#E31E24" : "#A3A4A5" } />)}</span>
                    <span>{rating.stars} ({rating.count})</span>
                </span>}
            {dashboard ||
            <> 
                {quantity >= 1 ? 
                <QuantityControl>
                    <span onClick={()=>setQuantity(q => q-1)} className="controls">-</span>
                    {quantity}
                    <span onClick={()=>setQuantity(q => q+1)} className="controls">+</span>
                </QuantityControl> : 
                <button onClick={() => setQuantity(1)}>КУПИТЬ</button>}
            </>
            }
        </Wrapper>
    )
})
