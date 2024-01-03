import React from 'react'
import {Link} from 'react-router-dom'

export default function CategoryItem ({link, icon, name, count, ...props}) {
    return (
        <Link to={link} className='category__name'>
            <i className={`mdi mdi-${icon}`}></i>
            <p>{name}</p>
            <span>доступно {count} вакансии <i className='mdi mdi-arrow-right'></i></span>
        </Link>
    )
}
