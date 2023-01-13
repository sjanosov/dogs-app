import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../scss/_navigation.scss';
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
    console.log(src)
    const sound = new Howl({
        src, 
        html5: true, 
        onend: () => setIsDisabled(false)
      });
      setIsDisabled(true);
      sound.play();
      
}

let activeStyle = {
    borderBottom: "2px solid #fff", 
    paddingBottom: "1px"
}

let notSelected = {
    textDecoration: "none",
}

// function handleSoundPlay() {

//     setIsDisabled(true);
//     soundPlay()
// }
    console.log(isDisabled)
    return (
            <nav className="site-header" >
                <FontAwesomeIcon icon={faPaw} className="paw-icon"  onClick={() => isDisabled ? null : soundPlay(dogSounds[Math.floor(Math.random() * (dogSounds.length))])}/>
                <ul className="navigation">
                    <li className="nav-item"><NavLink to="dogs" >Dogs</NavLink></li>
                    <li className="nav-item"><NavLink to="breeds" >Breeds</NavLink></li>
                    <li className="nav-item"><NavLink to="adoption">Adopt me</NavLink></li>
                    <li className="nav-item"><NavLink to="training">Trainig</NavLink></li>
                </ul>
            </nav>

    )
}

export default Navigation