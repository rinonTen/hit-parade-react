import React from 'react'
import { Link } from 'react-router-dom'
import headset from '../images/headset.svg';
export default function StylesComponent({ style }) {

    return (
        <Link to={`/styles/${style}`}>
            <div className="style--container">
                <img src={headset} alt="headphone image" />
                <p>{style}</p>
            </div>
        </Link>
    )
}
