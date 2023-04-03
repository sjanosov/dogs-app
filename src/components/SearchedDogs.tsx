import React from 'react'
import { dogsForAdoption } from '../constants/dogsForAdoption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'

const SearchedDogs = () => {

    function dogCard() {
        return dogsForAdoption.map((dog, index) => {
            return (
                <div className="dog-card">
                    <div className="dog-portrait">
                        <img src={require(`../images/${dog.imageUrl}.jpg`)} />
                    </div>
                    <div className="dog-info">
                        <div className="dog-header">
                            <div className="dog-name-age">
                                <div className="left-side">
                                <FontAwesomeIcon icon={faShieldDog} className="fa-shield-icon" />
                                    <h3 className="dog-name">{dog.name}</h3>
                                    <span className="dog-age"> , {dog.age} years</span>
                                </div>
                                <div className="right-side">
                                    {dog.gender}
                                </div>
                            </div>
                            <div className="dog-breed">
                                {dog.breed}
                            </div>
                        </div>
                        <div className="dog-content">
                            <div className="about">
                                <span>About</span> {dog.name}
                            </div>
                            <div className="about-text">
                                {dog.empathy} {dog.behavior}
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
    }

    return (
        <>
            {dogCard()}
        </>

    )
}

export default SearchedDogs