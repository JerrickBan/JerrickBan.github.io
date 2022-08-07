import React from 'react';
import '../App.css';


export default function Header(props) {
    return (
        <div className='section_a'>
            <h1 className='title'>{props.section}</h1>
        </div>
    )
}