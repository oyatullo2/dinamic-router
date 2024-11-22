import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import style from './user.module.css'
export const User = () => {
    const [user, setUser] = useState([]);
    const {userId} = useParams();
    const URL = (`https://jsonplaceholder.typicode.com/albums`)

    const fetchIdUser = async() => {
        const request = await fetch(`${URL}/${userId}`);
        const response = await request.json();
        setUser(response);
    }

    useEffect(()=>{
        fetchIdUser();
    },[])

    return(
        <>
        <h1 className={style.h1}>User page !</h1>
        <div className={style.main}>
                <ul>
                    <li>Id : {user?.id || "Loading..."}</li>
                    <li>UserId : {user?.userId || "Loading..."}</li>
                    <li>Title : {user?.title || "Loading..."}</li>
                    <Link to={'/'}><button className={style.button}>Back</button></Link>
                </ul>
        </div>
        </>
    )
}