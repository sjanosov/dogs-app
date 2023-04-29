import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { IDogbreedProps } from '../../types/types';



function DogBreed(props: IDogbreedProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [breedToShow, setBreedToShow] = useState<any>();

    function closeLightbox() {
        setLightboxOpen(false);
    }

    function handleLightbox(breed: any) {
        setLightboxOpen(true);
        setBreedToShow(breed);

    }
    console.log(lightboxOpen)


    return (
        <>
            <div className="card" key={props.breed.id} role="button" onClick={() => handleLightbox(props.breed)} tabIndex={0}>
                <div className="card-top">
                    <img src={props.breed.image['url']} loading="lazy" />
                </div>
                <div className="card-bottom">
                    <h1>{props.breed.name}</h1>
                    <p>
                        <b>Temperament:</b> {props.breed.temperament}
                    </p>
                    <div>
                        <b>Breed group:</b> {props.breed.breed_group}
                    </div>
                </div>
            </div>
            <div className={lightboxOpen ? "breed-lightbox opened" : "breed-lightbox"} >
                <div className="lightbox-inner">
                    <FontAwesomeIcon icon={faWindowClose} onClick={() => closeLightbox()} />
                    <h1 className='breed-detail-header'>{breedToShow?.name}</h1>
                    <p className="attribute"><b>Breed suitable for</b></p>
                    <p className="value">{breedToShow?.bred_for}</p>
                    <hr />
                    <p className="attribute"><b>Breed group</b></p>
                    <p className="value">{breedToShow?.breed_group}</p>
                    <hr />
                    <p className="attribute"><b>Temperament</b></p>
                    <p className="value">{breedToShow?.temperament}</p>
                    <hr />
                    <p className="attribute"><b>Lifespan</b></p>
                    <p className="value">{breedToShow?.life_span}</p>
                </div>
            </div>
            <div className="overlay" />
            <>
            </>
        </>

    )
}

export default DogBreed