import { collection, getDocs, query } from '@firebase/firestore'
import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { firestore } from '../../globals/firebase'


// const order = {};

const Order = styled.div`
    .title {

    }
`

export default function Employee() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersQuery = query(collection(firestore, "orders"))
        getDocs(ordersQuery)
        .then(snapshot => setOrders(snapshot.docs))
    }, [])
    
    return (
        <>
            <Order>
                <div className="title"></div>
            </Order>
        </>
    )
}
