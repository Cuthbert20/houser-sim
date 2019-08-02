import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
        return (
            <div>
                Header is cool
                <br/>
               <Link  to="/"> <button>Home</button> </Link>
            </div>
        )
    }
