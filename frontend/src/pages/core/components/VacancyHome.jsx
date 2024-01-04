import React from 'react'
import {Link} from 'react-router-dom'

export default function VacancyHome ({time, company, title, text, link, exp, ...props}) {
    return (
        <div className='home__job-item'>
            <span className='hji-time'>{time}</span>
            <span className='hji-img'>
                        <img src={company.img} alt='' />
                    </span>
            <Link to={company.link} className='hji-company'>{company.name}</Link>
            <Link to={link} className='hji-title'>{title}</Link>
            <div className='hji-emp'>
                <span className='hji-salary'><i className='mdi mdi-currency-rub'></i> {exp.salary}</span>
                <span><i className='mdi mdi-map-marker'></i> {exp.address}</span>
                <span><i className='mdi mdi-clock-outline'></i> {exp.time}</span>
                <span><i className='mdi mdi-briefcase'></i> {exp.serial}</span>
                <span><i className='mdi mdi-pound'></i> {exp.category}</span>
            </div>
            <span className='hji-text'>{text}</span>
        </div>
    )
}
