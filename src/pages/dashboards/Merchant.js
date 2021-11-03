import { addDoc, collection } from '@firebase/firestore';
import { ref, uploadBytes } from '@firebase/storage';
import React, { useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import styled from 'styled-components'
import { firestore, storage } from '../../globals/firebase';

const Wrapper = styled.div`
    form {
        width: 100%;
        max-width: 300px;
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
        border-right: 1px solid #E31E24;
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
    gap: 20px;
    .field {
        display: flex;
        flex-direction: column;
        width: 100%;
        label{
            margin-bottom: 10px;
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
    .price {
        max-width: 200px;
        border: none;
    }
    .desc {
        height: 100px;
        padding: 15px 20px;
    }
`

export default function Merchant() {
    const [product, updateProduct] = useState({desc: "", price: 0, imageRef: ""});
    const [loading, setLoading] = useState(-1);
    const fileRef = useRef();
    
    const handleSubmitProduct = (e) => {
        e.preventDefault();
        const collectionRef = collection(firestore, "products")
        addDoc(collectionRef, product).then(docId => console.log(docId))
    }

    const handleFileChange = ({target}) => {
        setLoading(0);
        const file = target.files[0];
        const productsRef = ref(storage, "products/"+file.name)
        uploadBytes(productsRef, file)
        .then((snapshot) => updateProduct(val => ({...val, imageRef: snapshot.ref.fullPath})))
        .finally(() => setLoading(1))
    }
    
    return (
        <Wrapper>
            <form onSubmit={handleSubmitProduct}>
                <span className="title">New product</span>
                <Grid>
                    <div className="field">
                        <label>Add description</label>
                        <textarea className="desc" required value={product.desc} onChange={({target:{value}})=>updateProduct(val => ({...val, desc: value}))} />
                    </div>
                    <div className="field">
                        <label>Add price</label>
                        <input className="price" required type="number" val={product.useRefprice} onChange={({target:{value}})=>updateProduct(val => ({...val, price: +value}))} />
                    </div>
                    <div className="field file">
                        <label onClick={() => fileRef.current.click()}>Add Image <AiOutlineCloudUpload /> </label>
                        <input ref={fileRef} type="file" onChange={handleFileChange} />
                    </div>
                </Grid>
                <button disabled={loading === 0}>Add</button>
            </form>
        </Wrapper>
    )
}
