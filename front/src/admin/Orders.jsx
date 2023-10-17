import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { adminAction } from './../actions/admin-action';


export default function Orders() {
    const dispatch = useDispatch();
    const { orderHistory, isLoading } = useSelector((state) => state.adminOrders);
    useEffect(() => {
        dispatch(adminAction());
    }, []);
    return (
        <div className='container'>
            {
                JSON.stringify(orderHistory)
            }
        </div>
    )
}
