import React, {  useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import dogCrying from '../sounds/dogCrying.mp3';
import dogEating from '../sounds/dogEating.mp3';
import dogBarking from '../sounds/dogBarking.mp3';
import dogWhining from '../sounds/dogWhining.mp3';
import wolfHowl from '../sounds/wolfHowl.mp3';
import { Howl, Howler } from 'howler';

function Navigation() {

    const [isDisabled, setIsDisabled] = useState(false);

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
        let path = `/home`; 
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

    return (
        <nav className="site-header-container">
            <div className="site-header">
                <a className="paw-icon"   onClick={handlePaw}><FontAwesomeIcon icon={faPaw} /></a>
                <ul className="navigation">
                    <li className="nav-item"><NavLink to="dogs" >Dogs</NavLink></li>
                    <li className="nav-item"><NavLink to="breeds" >Breeds</NavLink></li>
                    <li className="nav-item"><NavLink to="adoption">Adopt me</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation