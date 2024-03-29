import React, { useEffect, useState, useCallback } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBurger, faPaw, faXmark } from '@fortawesome/free-solid-svg-icons';
import dogCrying from '../sounds/dogCrying.mp3';
import dogEating from '../sounds/dogEating.mp3';
import dogBarking from '../sounds/dogBarking.mp3';
import dogWhining from '../sounds/dogWhining.mp3';
import wolfHowl from '../sounds/wolfHowl.mp3';
import { Howl, Howler } from 'howler';
import { ClassNames } from '@emotion/react';
import classNames from 'classnames';

function Navigation() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [navigationOpened, setNavigationOpened] = useState(false);
    const [showExitButton, setShowExitButton] = useState(false);

    const dogSounds = [
        dogCrying,
        dogEating,
        dogBarking,
        dogWhining,
        wolfHowl
    ];


    const soundPlay = (src: any) => {
        console.log(src)
        const sound = new Howl({
            src,
            html5: true,
            onend: () => setIsDisabled(false)
        });
        setIsDisabled(true);
        sound.play();

    }


    let navigate = useNavigate();
    function routeChange() {
        let path = ``;
        navigate(path);
        return Promise.resolve();
    }

    function doSoundPlay() {
        return isDisabled ? null : soundPlay(dogSounds[Math.floor(Math.random() * (dogSounds.length))])
    }

    function handlePaw() {
        routeChange().then(() => {
            doSoundPlay()
        });
    }


    function handleNavigation() {
        setNavigationOpened(!navigationOpened)
    }

    useEffect(() => {
        setShowExitButton(navigationOpened)
    }, [navigationOpened])






    return (
        <nav className={classNames("site-header-container", { "opened": navigationOpened })}>
            <div className="site-header">
                <a className="paw-icon" onClick={handlePaw}><FontAwesomeIcon icon={faPaw} /></a>
                <ul className="navigation">
                    <li className="nav-item"><NavLink to="dogs" >Dogs</NavLink></li>
                    <li className="nav-item"><NavLink to="breeds" >Breeds</NavLink></li>
                    <li className="nav-item"><NavLink to="adoption">Adopt me</NavLink></li>
                </ul>
                <div className="mobile-navigation">
                    <div className="mn-header">
                        <FontAwesomeIcon icon={faBars} onClick={handleNavigation} className={classNames("burger-navigation-button", { "opened": navigationOpened })} />
                        <FontAwesomeIcon icon={faXmark} onClick={handleNavigation} className={classNames("close-navigation-button", { "shown": showExitButton })} />
                    </div>
                    <div className="mn-list-container">
                        <ul className="mobile-navigation-list">
                            <li className="nav-item"><NavLink to="dogs" onClick={handleNavigation} >Dogs</NavLink></li>
                            <li className="nav-item"><NavLink to="breeds" onClick={handleNavigation}>Breeds</NavLink></li>
                            <li className="nav-item"><NavLink to="adoption" onClick={handleNavigation}>Adopt me</NavLink></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav >

    )
}

export default Navigation