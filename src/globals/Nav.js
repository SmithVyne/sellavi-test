import React, { useContext } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {IoDocumentOutline} from "react-icons/io5";
import { Link } from 'react-router-dom';
import {BsBag, BsHeart, BsPerson} from "react-icons/bs";
import styled from 'styled-components';
import logo from "../assets/logo.svg";
import { GlobalContext } from '../components/App';
import _ from 'lodash';

const Wrapper = styled.div`
    width: 100%;
    color: #000;
    font-size: 16px;
    line-height: 19px;
    height: fit-content;
    @media(max-width: 1100px) {
        display: none;
    }
`

const Step1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 106px;
    background: #F5F5F5;
    height: 47px;
    max-height: max-content;
    a {
        text-decoration: none;
        color: #000
    }
    :first-child {
        color: #646464;
    }
    
    svg {
        font-size: 22px;
        cursor: pointer;
        color: #000;
    }
`

const Step2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 95px;
    max-height: fit-content;
    img {
        width: 217px;
        margin-right: 54px;
    }

    .search {
        display: flex;
        align-items: center;
        margin-right: 43px;
        input {
            box-sizing: border-box;
            width: 371px;
            height: 41px;
            border: 1px solid #B4B4B4;
            padding: 10px 0 12px 21px;
            ::placeholder {
                color: #A3A4A5;
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
    }
    .contact-number {
        font-size: 19px;
        font-weight: 600;
        line-height: 23px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        margin-right: 80px;
        a {
            color: #646464;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            border-bottom: 1px solid #646464;
            text-decoration: none;
        }
    }

    .shop-utils {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 34.5px;
        svg {
            font-size: 25px;
            cursor: pointer;
        }
        a:last-child {
            position: relative;
            color: #000;
            .cart-count {
                color: #fff;
                font-family: Roboto;
                font-size: 11px;
                font-weight: 500;
                line-height: 12px;
                letter-spacing: 0em;
                text-align: center;
                position: absolute;
                top: -4px;
                right: -8px;
                background: #E31E24;
                border-radius: 100%;
                width: 17px;
                height: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`

const Step3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 91px;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
    background: #2B2A29;
    width: 100%;
    .menu-btn {
        display: flex;
        gap: 19px;
        padding: 14px 40px 14px 26px;
        background: #E31E24;
        align-items: center;
    }
    nav {
        display: flex;
        align-items: center;
        gap: 135px;
        a {
            color: #fff;
            text-decoration: none;
            padding: 14px 18px;
            :hover {
                background: #E31E24;
                cursor: default;
            }
        }
    }
`

const MobileNav = styled.div`
    display: none;
     @media(max-width: 1100px) {
        background: #fff;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 22px 15px;
        .burgerMenu {
            font-size: 30px;
        }
        a.logo {
            width: 40%;
            img {
                width: 100%;
            }
        }
        a:last-child {
            position: relative;
            color: #000;
            font-size: 25px;
            cursor: pointer;
            .cart-count {
                color: #fff;
                font-family: Roboto;
                font-size: 11px;
                font-weight: 500;
                line-height: 12px;
                letter-spacing: 0em;
                text-align: center;
                position: absolute;
                top: -4px;
                right: -8px;
                background: #E31E24;
                border-radius: 100%;
                width: 17px;
                height: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        svg.user {
            color: #000;
            font-size: 25px;
            cursor: pointer;
        }
    }
`

export default function Nav() {
    const {cart} = useContext(GlobalContext);
    
    return (
        <>
            <Wrapper>
                <Step1>
                    <span>г. Москва</span>
                    <Link to="/">Сборка и установка</Link>
                    <Link to="/">Доставка и самовывоз</Link>
                    <Link to="/">Пункт выдачи</Link>
                    <Link to="/">Оплата и возврат</Link>
                    <Link to="/user"><BsPerson /></Link>
                </Step1>
                <Step2>
                    <Link to="/"><img alt="logo" src={logo} /></Link>
                    <div className="search">
                        <input type="text" placeholder="Поиск по сайту..." />
                        <button>Найти</button>
                    </div>
                    <div className="contact-number">
                        8 800 000 000
                        <a href="tel:8 800 000 000" >Обратный звонок</a>
                    </div>
                    <div className="shop-utils">
                        <IoDocumentOutline />
                        <BsHeart />
                        <Link to="/cart"><span className="cart-count">{_.size(cart)}</span><BsBag /></Link>
                    </div>
                </Step2>
                <Step3>
                    <span className="menu-btn">
                        <GiHamburgerMenu />
                        Каталог
                    </span>
                    <nav>
                        <a href="#new">Новинки</a>
                        <a href="#brands">Бренды</a>
                        <a href="#services">Услуги дизайнерам</a>
                        <a href="#blog">Блог</a>
                    </nav>
                </Step3>
            </Wrapper>
            <MobileNav>
                <GiHamburgerMenu className="burgerMenu" />
                <Link className="logo" to="/"><img alt="logo" src={logo} /></Link>
                <Link to="/user"><BsPerson className="user" /></Link>
                <Link to="/cart"><span className="cart-count">{_.size(cart)}</span><BsBag /></Link>
            </MobileNav>
        </>
    )
}
