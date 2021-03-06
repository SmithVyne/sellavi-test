import { collection, onSnapshot, query } from '@firebase/firestore'
import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductClone from '../../components/ProductClone'
import { firestore } from '../../globals/firebase'



const Order = styled.div`
    margin-bottom: 50px;
    .title {
        width: 100%;
        background: #2B2A29;
        color: #fff;
        padding: 20px 25px;
        &>div {
            margin-bottom: 7px;
        }
    }
    .products {
        padding: 10px;
        width: 100%;
        background: #FAEEEE;
        color: #000;
        display: grid;
        grid-gap: 50px 45px;
        grid-template-columns: repeat(4, 1fr);
        background-size: cover;
        @media(max-width: 1100px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media(max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 400px) {
            grid-template-columns: 1fr;
        }
    }
`

export default function Employee() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersQuery = query(collection(firestore, "orders"))
        const unsubscribeOrders = onSnapshot(ordersQuery, snapshot => setOrders(snapshot.docs.map(snap => ({...snap.data(), id: snap.id}) )))
        return unsubscribeOrders
    }, [])
    
    return (
        <>
            {orders.map(order => 
                <Order key={order.id}>
                    <div className="title">
                        <div>Customer Name: {order.customerName}</div>
                        <div>Phone number: {order.contactNumber}</div>
                        <div>Total price: {order.cart_products.reduce((prev, product) => prev + +product.price * product.order_quantity, 0)} p.</div>
                    </div>
                    <div className="products">
                        {order.cart_products.map(product => <ProductClone key={product.id} product={product} />)}
                    </div>
                </Order>)}
        </>
    )
}
