/**
 * It checks if the user is an admin or not. If not, it redirects the user to the home page.
 * @returns Nothing.
 */
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
export default function Dashboard({ history }) {
    const { userInfo } = useSelector(state => state.user)
    useEffect(e => {
        if (!userInfo.info.isAdmin) {
            history.push("/")
            console.log(!userInfo.info.isAdmin)
        }
    }, []);
    return (
        <div>Dashboard</div>
    )
}
