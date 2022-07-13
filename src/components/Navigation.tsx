import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../scss/navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import dogCrying from '../sounds/dogCrying.mp3';
import dogEating from '../sounds/dogEating.mp3';
import dogBarking from '../sounds/dogBarking.mp3';
import dogWhining from '../sounds/dogWhining.mp3';
import wolfHowl from '../sounds/wolfHowl.mp3';
import {Howl, Howler} from 'howler';

function Navigation() {

    const [isDisabled, setIsDisabled] = useState(false);

    const dogSounds = [
        dogCrying,
        dogEating,
        dogBarking,
        dogWhining,
        wolfHowl
    ];


const soundPlay = (src:any) => {
    const sound = new Howl({
        src, 
        html5: true, 
        onend: () => setIsDisabled(false)
      });
      setIsDisabled(true);
      sound.play();
      
}

// function handleSoundPlay() {

//     setIsDisabled(true);
//     soundPlay()
// }
    
    return (
        <header>
            <nav className="site-header" >
                <FontAwesomeIcon icon={faPaw} className="paw-icon"  onClick={() => isDisabled ? null : soundPlay(dogSounds[Math.floor(Math.random() * (dogSounds.length + 1))])}/>
                <ul className="navigation">
                    <li className="nav-item"><Link to="dogs">Dogs</Link></li>
                    <li className="nav-item"><Link to="breeds">Breeds</Link></li>
                    <li className="nav-item"><Link to="adoption">Adopt me</Link></li>
                    <li className="nav-item"><Link to="training">Trainig</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Navigation