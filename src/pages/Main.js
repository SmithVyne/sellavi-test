import React, { memo, useContext, useRef } from 'react';
import styled from 'styled-components';
import bathroom from "../assets/bathroom.png";
import bathroom2 from "../assets/bathroom2.png";
import bannerLogo from "../assets/banner-logo.png";
import embroidery1 from "../assets/embroidery1.png";
import embroidery2 from "../assets/embroidery2.png";
import truck from "../assets/truck.svg";
import drawing from "../assets/drawing.svg";
import store from "../assets/store.svg";
import manager from "../assets/manager.svg";
import Product from '../components/Product';
import modernBathroom from "../assets/categories/modern-bathroom.png";
import modernBathroom2 from "../assets/categories/modern-bathroom1.png";
import corridoor from "../assets/categories/corridoor.png";
import livingRoom from "../assets/categories/living-room.png";
import feedbackBathroom from "../assets/feedback/bathroom.png";
import feedbackKitchen from "../assets/feedback/kitchen.png";
import feedbackLivingRoom from "../assets/feedback/living-room.png";
import scrollArrow from "../assets/arrow.svg";
import { GlobalContext } from '../components/App';
import smoothscroll from 'smoothscroll-polyfill';
import sellaviLogo from "../assets/footer/sellavi-logo.png";
import mastercard from "../assets/footer/mastercard.png";
import visa from "../assets/footer/visa.png";
import мир from "../assets/footer/мир.png";
import ssl from "../assets/footer/ssl.png";
import pci from "../assets/footer/pci.png";
import brand1 from "../assets/brands/image1.png";
import brand2 from "../assets/brands/image2.png";
import brand3 from "../assets/brands/image3.png";
import brand4 from "../assets/brands/image4.png";

// window.__forceSmoothScrollPolyfill__ = true;
const Wrapper = styled.main`
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    section.body {
        width: 100%;
        padding: 0 390px;
        @media(max-width: 1700px) {
            padding: 0 5vw;
        }
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
            @media(max-width: 720px) {
                width: 100%;
                margin-top: 300px;
                &.right {
                    display: none;
                }
            }
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
        @media(max-width: 720px) {
            width: 100%;
            height: 300px;
            top: 0;
            box-shadow: 0 0 60px 50px #fff;
            background: linear-gradient(268.69deg, #FEFEFC 1.12%, #FFFFFF 14.83%, #FEFEFE 84.17%, rgba(255, 255, 255, 0.86) 98.93%);
        }
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
                @media(max-width: 1500px) {
                    font-size: 3vw;
                    line-height: 100%;
                    img {
                        width: 11vw;
                    }
                }
                @media(max-width: 720px) {
                    font-size: 7vw;
                    line-height: 100%;
                    img {
                        width: 25vw;
                    }
                }
            }
            @media(max-width: 1500px) {
                font-size: 4vw;
                line-height: 100%;
            } 
            @media(max-width: 720px) {
                font-size: 9vw;
                line-height: 100%;
            }
        }
        img.embroidery1 {
            margin-bottom: 20px;
            @media(max-width: 1500px) {
                width: 15vw;
            }
            @media(max-width: 720px) {
                width: 20vw;
            }
        }

        img.embroidery2 {
            margin-top: 47px;
            @media(max-width: 1500px) {
                width: 10vw;
                margin-top: 30px;
            }
            @media(max-width: 720px) {
                width: 15vw;
            }
        }
    }
`

const Hits = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
        @media(max-width: 1240px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media(max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 400px) {
            grid-template-columns:1fr;
        }
    }
`

const Categories = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 71px;
    h2 {
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        margin: 0 0 30px;
    }
    .categories {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 50% 50%;
        @media(max-width: 1180px) {
            grid-template-columns: 100%;
        }
        .category {
            position: relative;
            img {
                width: 100%;
            }
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
        left: -40px;
        @media(max-width: 720px) {
            left: -15px;
        }
    }
    img.rightScroll {
        top: 50%;
        right: -40px;
        transform: rotate(180deg);
        @media(max-width: 720px) {
            right: -15px;
        }
    }
    .scrollWrapper {
        width: 100%;
        overflow-x: scroll;
        ::-webkit-scrollbar{
            width: 0px;
        }
        .feedbacks {
            display: flex;
            gap: 45px;
            align-items: center;
            width: max-content;
            padding: 5px;
            .feedback {
                box-shadow: 2px 3px 9px 0px #83838542;
                width: 350px;
                max-width: 88vw;
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

const Brands = styled(Feedback)`
    .allBrands {
        display: flex;
        gap: 29px;
        align-items: center;
        width: max-content;
        padding: 0 20px;
        .brand {
            box-shadow: 2px 3px 9px 0px #83838542;
            width: 253px;
            height: 253px;
            max-width: 88vw;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 80%
            }
        }
    }
`

const Footer = styled.footer`
    background: #fff;
    padding: 40px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        gap: 20px;
        align-items: center;
        width: fit-content;
    }
    .right {
        width: fit-content;
    }
    @media(max-width: 800px) {
        flex-direction: column-reverse;
        .left {
            img {
                width: 15vw;
            }
        }
        .right {
            img {
                width: 28vw;
            }
        }
    }
`

smoothscroll.polyfill();
export default memo(function Main() {
    const {products} = useContext(GlobalContext);   
    const feedbackRef = useRef();
    const brandsRef = useRef()
    const handleScroll = (direction="left") => {
        const {current} = feedbackRef;
        const offset = 0.88 * window.innerWidth + 45;
        if(direction === "right") {
            current.scrollBy({left: offset, behaviour: "smooth"})
        } else {
            current.scrollBy({left: -offset, behaviour: "smooth"})
        }
    }
    
    return (
        <Wrapper>
            <Banner>
                <div className="background">
                    <img alt="bathroom" src={bathroom} />
                    <img className="right" alt="bathroom2" src={bathroom2} />
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
            <Hits id="new">
                <h2>Хиты продаж</h2>
                <div className="hit-items">
                    {products.map((product, index) => <Product key={product.id} product={product} index={index} />)}
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
                <img alt="scroller" onClick={()=>handleScroll()} className="scroller leftScroll" src={scrollArrow} />
                <img alt="scroller" onClick={()=>handleScroll("right")} className="scroller rightScroll" src={scrollArrow} />
                <h2>Отзывы</h2>
                <div ref={feedbackRef} className="scrollWrapper">
                <div className="feedbacks">
                    <div className="feedback">
                        <img alt="feedback" src={feedbackBathroom} />
                        <span className="customer-name">Снежана</span>
                        <span className="customer-city">Москва</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>

                    <div className="feedback">
                        <img alt="feedback" src={feedbackKitchen} />
                        <span className="customer-name">Инна Васильева</span>
                        <span className="customer-city">Екатеринбург</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>

                    <div className="feedback">
                        <img alt="feedback" src={feedbackLivingRoom} />
                        <span className="customer-name">Андрей Семенов</span>
                        <span className="customer-city">Санкт - Петербург</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>

                    <div className="feedback">
                        <img alt="feedback" src={feedbackBathroom} />
                        <span className="customer-name">Инна</span>
                        <span className="customer-city">Екатеринбург</span>
                        <span className="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
                    </div>
                </div>
                </div>
            </Feedback>
            <Brands id="brands">
                <img alt="scroller" onClick={()=>handleScroll()} className="scroller leftScroll" src={scrollArrow} />
                <img alt="scroller" onClick={()=>handleScroll("right")} className="scroller rightScroll" src={scrollArrow} />
                <h2>Бренды</h2>
                <div ref={brandsRef} className="scrollWrapper">
                    <div className="allBrands">
                        <div className="brand">
                            <img alt="brand1" src={brand1} />
                        </div>
                        <div className="brand">
                            <img alt="bran2" src={brand2} />
                        </div>
                        <div className="brand">
                            <img alt="brand3" src={brand3} />
                        </div>
                        <div className="brand">
                            <img alt="brand4" src={brand4} />
                        </div>
                    </div>
                </div>
            </Brands>
            <Footer>
                <div className="left">
                    <img alt="mastercard" src={mastercard} />
                    <img alt="visa" src={visa} />
                    <img alt="мир" src={мир} />
                    <img alt="ssl" src={ssl} />
                    <img alt="pci" src={pci} />
                </div>
                <div className="right"><img alt="sellavi-logo" src={sellaviLogo} /></div>
            </Footer>
            </section>
        </Wrapper>
    )
})
