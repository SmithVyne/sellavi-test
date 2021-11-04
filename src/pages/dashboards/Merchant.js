import { addDoc, collection } from '@firebase/firestore';
import { ref, uploadBytes } from '@firebase/storage';
import React, { useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import styled from 'styled-components'
import Loader from '../../components/Loader';
import { firestore, storage } from '../../globals/firebase';

const Wrapper = styled.div`
    form {
        width: 100%;
        max-width: 400px;
        height: fit-content;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10px;
        padding: 30px;
        margin: 0;
        padding: 0;
        margin-top: 50px;
        border-left: 1px solid #E31E24;
        padding: 0 20px;
        .title {
            font-size: 22px;
            line-height: 34px;
        }
        button {
            padding: 0 34px;
            background: #E31E24;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: 700;
            height: 41px;
            width: fit-content;
            display: flex;
            align-items: center;
            :disabled {
                cursor: not-allowed;
                background: darkred;
            }
        }
    }
`

const Grid = styled.div`
    display: grid;
    width: 100%;
    gap: 15px;
    .field {
        display: flex;
        flex-direction: column;
        width: 100%;
        label{
            margin-bottom: 10px;
        }
        input, textarea {
            outline: none;
            box-sizing: border-box;
            width: 100%;
            height: 41px;
            border: none;
            padding: 20px;
            box-shadow: inset 0px 0px 4px 4px #00000040;
            border-radius: 21px;
        }
    }
    .field.file {
        label {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            width: fit-content;
            svg {
                width: 30px;
                height: 30px;
            }
        }
        input{
            display: none;
        }
    }
    
    input.price {
        max-width: 200px;
        border: none;
    }
    textarea.desc {
        height: 100px;
        padding: 15px 20px;
    }
    .options {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 10px;
        input {
            cursor: pointer;
        }
        span {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
    label.price { 
        display: flex;
        align-items: center;
        gap: 20px;
        small {
            display: flex;
            align-items: center;
            gap: 10px;
            input {
                width: 15px;
                height: 15px;
                padding: 20px;
                box-shadow: none;
                border-radius: 21px;
            }
        }
    }
`

export default function Merchant() {
    const [product, updateProduct] = useState({desc: "", price: 0, imageRef: ""});
    const [loading, setLoading] = useState(0);
    const fileRef = useRef();
    
    const handleSubmitProduct = (e) => {
        setLoading(-2);
        e.preventDefault();
        const collectionRef = collection(firestore, "products")
        addDoc(collectionRef, product)
        .finally(() => setLoading(2))
    }

    const handleFileChange = ({target}) => {
        setLoading(-1);
        const file = target.files[0];
        const productsRef = ref(storage, "products/"+file.name)
        uploadBytes(productsRef, file)
        .then((snapshot) => updateProduct(val => ({...val, imageRef: snapshot.ref.fullPath})))
        .finally(() => setLoading(1))
    }
    
    return (
        <Wrapper>
            <div className="allProducts">
                
            </div>
            <form onSubmit={handleSubmitProduct}>
                <span className="title">New product</span>
                <Grid>
                    <div className="field">
                        <label>Add description*</label>
                        <textarea className="desc" required value={product.desc} onChange={({target:{value}})=>updateProduct(val => ({...val, desc: value}))} />
                    </div>
                    <div className="field">
                        <label className="price">
                            Add price* 
                            <small className="weighted" >Weighted <input checked={product.weighted} type="radio" onClick={() => updateProduct(prod => (
                                {...prod, weighted : !prod.weighted }))} /></small>
                        </label>
                        <input placeholder={product.weighted ? "rub per KG" : "rub"} className="price" required type="number" val={product.price} onChange={({target:{value}})=>updateProduct(val => ({...val, price: +value}))} />
                    </div>
                    <div className="field file">
                        <label onClick={() => fileRef.current.click()}>
                            Add Image* <AiOutlineCloudUpload />
                            {loading === -1 && <Loader />}
                            {loading === 1 && <BsCheck color="#28a745" />}
                        </label>
                        <input ref={fileRef} type="file" onChange={handleFileChange} accept="image/*" />
                    </div>
                    <div className="field">
                        <label>Add rating</label>
                        <div className="options">
                            <input min={0} max={5} type="number" placeholder="average" onChange={({target: {value}}) => updateProduct(prod => (
                                {...prod, rating: {...prod?.rating, stars: +value} }
                            ))} />
                            <input type="number" placeholder="total reviews" onChange={({target: {value}}) => updateProduct(prod => (
                                {...prod, rating: {...prod?.rating, count: +value} }
                            ))} />
                        </div>
                    </div>
                    <div className="options">
                        <span>
                            <label>Sale</label>
                            <input type="radio" checked={product.sale} onClick={() => updateProduct(prod => ({...prod, sale : !prod.sale }))} />
                        </span>
                        <span>
                            <label>New</label>
                            <input type="radio" checked={product.new} onClick={() => updateProduct(prod => ({...prod, new : !prod.new }))} />
                        </span>
                    </div>
                </Grid>
                <button disabled={loading === -1 || loading === -2}>Add</button>
            </form>
        </Wrapper>
    )
}
