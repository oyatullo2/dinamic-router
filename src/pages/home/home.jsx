import style from './home.module.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {

    const [user , setUser] = useState([])
    const URL = ('https://jsonplaceholder.typicode.com/albums')
    const [ischeck , setIscheck] = useState(()=>{
        return localStorage.getItem('ischeck') === 'true'
    })
    
    const fetchAlbums = async() => {
        const request = await fetch(URL);
        const response = await request.json();
        setUser(response);
    }

    useEffect(()=>{
        fetchAlbums()
        document.body.style.backgroundColor = ischeck ? 'black' : '#f4f4f4'
        document.documentElement.style.setProperty('--global-color', ischeck ? 'white' : 'black');  
        localStorage.setItem('ischeck' , ischeck)
    },[ischeck])

    const handleCheck = () => {
        setIscheck(!ischeck)
    }

    return(
        <>
        <input 
        type="checkbox" 
        id='check'
        className={style.check}
        checked={ischeck}
        onClick={handleCheck}
         />
        <div 
        style={{
            boxShadow : ischeck ? '0px 0px 10px 0px white' : '0px 0px 10px 0px black'
        }}
        className={style.menu}>
        <label htmlFor="check" className={style.checkbtn}>
            <span 
            style={{
                color : ischeck ? 'white' : 'black',
                left : ischeck ? '36px' : '3px'
            }}
            className={style.bar}>
                {ischeck ? <i id={style.sun} class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
            </span>
        </label>
        </div>
        <h1 className={style.home_page}>Home page !</h1>
        <div className={style.main}>
            <div className={style.user}>
                {user.length ? (
                    user.map((item)=>(
                        <ul className={style.ul} key={item.id}>
                            <li><Link to={`/user/${item.id}`} className={style.li}>User : {item?.id} Item : {item.title}</Link></li>
                        </ul>
                    ))
                ):
                (
                    <h1>Loading...</h1>
                )}
            </div>
            <Link to={`/user/${parseInt(Math.random()*101)}`}><button 
            className={style.button}
            style={{
                border : ischeck ? '2px solid white' : '2px solid black',
                color : ischeck ? 'white' : 'black',
                boxShadow : ischeck ? '0px 0px 10px 0px white' : '0px 0px 10px 0px black'
            }}
            >Random
            </button>
            </Link>
        </div>
        </>
    )
}