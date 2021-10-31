import React, { useRef } from 'react';
import styled from 'styled-components';
import bathroom from "./assets/bathroom.png";
import bathroom2 from "./assets/bathroom2.png";
import bannerLogo from "./assets/banner-logo.png";
import embroidery1 from "./assets/embroidery1.png";
import embroidery2 from "./assets/embroidery2.png";
import truck from "./assets/truck.svg";
import drawing from "./assets/drawing.svg";
import store from "./assets/store.svg";
import manager from "./assets/manager.svg";
import tap1 from "./assets/products/tap.png";
import sink1 from "./assets/products/sink1.png";
import Product from './components/Product';
import modernBathroom from "./assets/categories/modern-bathroom.png";
import modernBathroom2 from "./assets/categories/modern-bathroom1.png";
import corridoor from "./assets/categories/corridoor.png";
import livingRoom from "./assets/categories/living-room.png";
import feedbackBathroom from "./assets/feedback/bathroom.png";
import feedbackKitchen from "./assets/feedback/kitchen.png";
import feedbackLivingRoom from "./assets/feedback/living-room.png";
import scrollArrow from "./assets/arrow.svg";

const Wrapper = styled.main`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    .body {
        width: 100%;
        padding: 0 390px;
    }
    .features {
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 91.55px;
        margin: 30px 0 71px;
        width: 100%;
        @media(max-width: 1040px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 25px 27px;
        }
        .feature {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            @media(max-width: 1040px) {
                justify-content: flex-start;
            }
        }
    }
`
const Banner = styled.section`
    width: 100%;
    height: fit-content;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .background {
        width: 100%;
        display: flex;
        justify-content: space-between;
        img {
            width: 40%;
        }
    }
    .foreground {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 40%;
        background: radial-gradient(circle, rgba(254,254,252,1) 0%, rgba(255,255,255,1) 75%, rgba(254,254,254,0.7) 86%, rgba(255,255,255,0) 100%);
        border: none;
        .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: Cormorant;
            font-size: 58px;
            font-weight: 500;
            line-height: 83px;
            text-align: center;
            gap: 23px;
            .sub-title {
                font-size: 48px;
                line-height: 58px;
            }
        }
        img.embroidery1 {
            margin-bottom: 20px;
        }

        img.embroidery2 {
            margin-top: 47px;
        }
    }
`

const Hits = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        margin: 0 0 30px;
    }
    .hit-items {
        display: grid;
        grid-gap: 50px 45px;
        grid-template-columns: repeat(4, 1fr);
    }
`

const Categories = styled(Hits)`
    margin-top: 100px;
    display: flex;
    .categories {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr;
        .category {
            position: relative;
            button {
                position: absolute;
                width: 158px;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                top: calc(50% - 35px);
                left: 0;
                border: none;
                color: #fff;
                background: #2B2A29;
                :hover {
                    background: #E31E24;
                }
            }
        }
    }
`

const Feedback = styled(Categories)`
    position: relative;
    .scroller {
        position: absolute;
        z-index: 1;
        cursor: pointer;
    }
    img.leftScroll {
        top: 50%;
        left: -55px;
    }
    img.rightScroll {
        top: 50%;
        right: -55px;
        transform: rotate(180deg);
    }
    .scrollWrapper {
        width: 100%;
        overflow-x: hidden;
        .feedbacks {
            display: flex;
            gap: 45px;
            align-items: center;
            width: max-content;
            padding: 0 5px;
            .feedback {
                box-shadow: 2px 3px 9px 0px #83838542;
                width: 350px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 36px 40px;
                img {
                    width: 100%;
                    height: 206px;
                }
                .customer-name {
                    margin: 23px 0 6px;
                    color: #E31E24;
                    font-size: 18px;
                }
                .customer-city {
                    color: #4F4F4F;
                    font-size: 15px;
                    margin-bottom: 10px;
                }
                .customer-comment {
                    font-size: 16px;
                    font-style: italic;
                    font-weight: 300;
                    line-height: 21px;
                    text-align: left;
                }
            }
        }
    }
`

const products = [
    {image: tap1, price: 5200, desc: "Стул Мартин бархатный, ножки тёмные", rating: [4.9, 15]},
    {image: sink1, price: 5200, desc: "Стул Мартин бархатный, ножки тёмные", rating: [5.0, 15], newProd: true},
    {image: tap1, price: 5200, desc: "Стул Мартин бархатный, ножки тёмные", },
    {image: sink1, price: 5200, desc: "Стул Мартин бархатный, ножки тёмные", sale: true},
]

export default function Main() {
    const feedbackRef = useRef()
    const handleScroll = (direction="left") => {
        const {current} = feedbackRef;
        if(direction === "right") {
            current.scroll({left: 395, top:0, behaviour: "smooth"})
        } else {
            current.scroll({left: -395, top:0, behaviour: "smooth"})
        }
    }
    
    return (
        <Wrapper>
            <Banner>
                <div className="background">
                    <img alt="bathroom" src={bathroom} />
                    <img alt="bathroom2" src={bathroom2} />
                </div>
                <div className="foreground">
                    <img className="embroidery1" alt="embroidery1" src={embroidery1} />
                    <span className="text">
                        Безупречный интерьер
                        <span className="sub-title">
                            от <img alt="bannerLogo" src={bannerLogo} />
                        </span>
                    </span>
                    <img className="embroidery2" alt="embroidery2" src={embroidery2} />
                </div>
            </Banner>
            <section className="body">
            <div className="features">
                <span className="feature">
                    <img alt="Доставка" src={truck} />
                    Доставка по Москве <br /> и Московской области
                </span>
                <span className="feature">
                    <img alt="Мебель" src={drawing} />
                    Мебель по вашему <br /> эскизу
                </span>
                <span className="feature">
                    <img alt="Посетите" src={store} />
                    Посетите наш <br /> шоу-рум
                </span>
                <span className="feature">
                    <img alt="Консультация" src={manager} />
                    Консультация <br /> менеджера
                </span>
            </div>
            <Hits>
                <h2>Хиты продаж</h2>
                <div className="hit-items">
                    {products.map(product => <Product product={product} />)}
                </div>
            </Hits>
            <Categories>
                <h2>Категории</h2>
                <div className="categories">
                    <div className="category">
                        <button>{"САНТЕХНИКА >"}</button>
                        <img alt="modernBathroom" src={modernBathroom} />
                    </div>
                    <div className="category">
                        <button>{"ПЛИТКА >"}</button>
                        <img alt="modernBathroom2" src={modernBathroom2} />
                    </div>
                    <div className="category">
                        <button>{"ЛЕПНИНА >"}</button>
                        <img alt="corridoor" src={corridoor} />
                    </div>
                    <div className="category">
                        <button>{"ФРЕСКА >"}</button>
                        <img alt="livingRoom" src={livingRoom} />
                    </div>
                </div>
            </Categories>
            <Feedback>
                <img onClick={()=>handleScroll()} className="scroller leftScroll" src={scrollArrow} />
                <img onClick={()=>handleScroll("right")} className="scroller rightScroll" src={scrollArrow} />
                <h2>Отзывы</h2>
                <div ref={feedbackRef} className="scrollWrapper">
                <div className="feedbacks">
                    <div className="feedback">
                        <img alt="feedback-image" src={feedbackBathroom} />
                        <span className="customer-name">Снежана</span>
                        <span className="customer-city">Москва</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>

                    <div className="feedback">
                        <img alt="feedback-image" src={feedbackKitchen} />
                        <span className="customer-name">Снежана</span>
                        <span className="customer-city">Москва</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>

                    <div className="feedback">
                        <img alt="feedback-image" src={feedbackLivingRoom} />
                        <span className="customer-name">Снежана</span>
                        <span className="customer-city">Москва</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>

                    <div className="feedback">
                        <img alt="feedback-image" src={feedbackBathroom} />
                        <span className="customer-name">Снежана</span>
                        <span className="customer-city">Москва</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>
                    </div>
                </div>
            </Feedback>
            </section>
        </Wrapper>
    )
}
