import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components';
import { GlobalContext } from '../components/App'
import Product from '../components/Product';
import popupBg from "../assets/cart-background.png";
import {GrClose} from "react-icons/gr";
import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '../globals/firebase';
import { AnimatePresence, motion } from 'framer-motion';
import { Redirect } from 'react-router';

const Wrapper = styled.div`
    position: relative;
    margin-top: 50px;
    .products {
        display: grid;
        grid-gap: 50px 45px;
        grid-template-columns: repeat(3, 1fr);
        background-size: cover;
        @media(max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 400px) {
            grid-template-columns:1fr;
        }
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
const Popup = styled(motion.div)`
    background: rgba(1, 1, 1, 0.2);
    position: fixed;
    z-index: 4;
    color: #000;
    top: 0;
    left: 0;
    background: url(${({bg}) => bg}) no-repeat 50% 50%;
    background-size: cover;
    width: 100%;
    height: 561px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 720px) {
        height: 100vh;
    }
    svg.closeBtn {
        position: absolute;
        top: 33px;
        right: 33px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
    .title {
        font-size: 34px;
        font-weight: 500;
        line-height: 41px;
        margin-bottom: 18px;
    }
    .desc {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        margin-bottom: 24px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        .inputs {
            display: flex;
            align-items: center;
            gap: 29px;
            margin-bottom: 27px;
            @media(max-width: 720px) {
                flex-direction: column;
            }
            input {
                height: 50px;
                width: 253px;
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                padding-left: 26px;
                :placeholder {
                    color: #000;
                }
            }
        }
        button {
            height: 53px;
            width: 307px;
            background: #E31E24;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            :disabled {
                cursor: not-allowed;
                background: darkred;
            }
        }
    }
`

const CheckoutPopup = ({setShowpopup, products, totalPrice}) => {
    const [customerName, setCustomerName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [loading, setLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const {updateCart} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        const collectionRef = collection(firestore, "orders")
        addDoc(collectionRef, {products, customerName, contactNumber, totalPrice, timeStamp: Date("ddd MMM DD YYYY HH:mm:ss")})
        .then(() => updateCart({}))
        .finally(() => setRedirect(true))
    }
    
    return (
        <Popup bg={popupBg} 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}>
            {redirect && <Redirect to="/" />}
            <GrClose className="closeBtn" onClick={() => setShowpopup(false)} />
            <span className="title">Заказать звонок</span>
            <span className="desc">Оставьте ваши контакты и мы свяжемся с вами в ближайшее время</span>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input value={customerName} type="text" placeholder="Ваше Имя" onChange={({target: {value}}) => setCustomerName(value)} />
                    <input value={contactNumber} type="tel" placeholder="Телефон" onChange={({target: {value}}) => setContactNumber(value)} />
                </div>
                <button disabled={loading}>Получить консультацию</button>
            </form>
        </Popup>
    )
}

export default function Cart() {
    const {cart} = useContext(GlobalContext);
    const products = useMemo(() => Object.values(cart), [cart])
    const totalPrice = useMemo(() => products.reduce((sum, product) => sum + product.price * product.quantity, 0), [products])
    const [showpopup, setShowpopup] = useState(false)
    
    return (
        <Wrapper>
            <AnimatePresence>
                {showpopup && <CheckoutPopup products={products} setShowpopup={setShowpopup} totalPrice={totalPrice} />}
            </AnimatePresence>
            <div className="products">
                {products.map((product, index) => <Product key={product.id} product={product} isCart={true} index={index} />)}
            </div>
            <div className="bottom">
                <button disabled={totalPrice === 0} onClick={() => setShowpopup(true)}>Buy Now</button>
                <span className="price">{totalPrice} p.</span>
            </div>
        </Wrapper>
    )
}
