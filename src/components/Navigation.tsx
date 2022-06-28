import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/dogs" />Dogs</li>
                <li><Link to="/breeds" />Breeds</li>
                <li><Link to="/adoption" />Adopt me</li>
                <li><Link to="/training" />Trainig</li>
            </ul>
        </nav>

    )
}

export default Navigation