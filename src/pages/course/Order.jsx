import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

const Order = () => {
    const { id } = useParams()
    return (
        <div>

            <Header />
            Order {id} successfully order</div>
    )
}

export default Order