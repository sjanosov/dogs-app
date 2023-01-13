import React, { useEffect, useState } from 'react'
import '../scss/_dog-breeds.scss';
import '../scss/_dogs.scss';
import '../scss/_lightbox.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../common/Spinner';

function DogBreed() {

    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [breedToShow, setBreedToShow] = useState<any>();
    
    
    useEffect(() => {
        getBreeds();
    }, [])
    const getBreeds = async () => {
        console.log("loading")

        setLoading(true);
        const api = await fetch(`https://api.thedogapi.com/v1/breeds`)

        const data = await api.json();

        setBreeds(data);
        setLoading(false);
    }

    function handleLightbox(breed: any) {
        setLightboxOpen(true);
        setBreedToShow(breed);
        
    }

    function closeLightbox() {
        setLightboxOpen(false);
    }
    
    return (
        <>
        
        {loading ? <Spinner /> :
            breeds?.map((breed: Record<string, any>) => {
                return (
                    <div className="card" key={breed.id} role="button" onClick={() => handleLightbox(breed)}>
                        <div className="card-top">
                            <img src={breed.image['url']} />
                        </div>
                        <div className="card-bottom">
                            <h1>{breed.name}</h1>
                            <p>
                                <b>Temperament:</b> {breed.temperament}
                            </p>
                            <div>
                                <b>Breed group:</b> {breed.breed_group}
                            </div>
                        </div>
                    </div>
                )
            })
        }
         <>
            <div className={lightboxOpen ? "breed-lightbox opened" : "breed-lightbox"} >
                <div className="lightbox-inner">
                    <FontAwesomeIcon icon={faWindowClose} onClick={() => closeLightbox()}/>
                    <h1 className='breed-detail-header'>{breedToShow?.name}</h1>
                    <p className="attribute"><b>Breed suitable for</b></p>
                    <p className="value">{breedToShow?.bred_for}</p>
                    <hr/>
                    <p className="attribute"><b>Breed group</b></p>
                    <p className="value">{breedToShow?.breed_group}</p>
                    <hr/>
                    <p className="attribute"><b>Temperament</b></p>
                    <p className="value">{breedToShow?.temperament}</p>
                    <hr/>
                    <p className="attribute"><b>Lifespan</b></p>
                    <p className="value">{breedToShow?.life_span}</p>
                </div>
            </div>
            <div className="overlay" />
        </>
            
        </>

    )
}

export default DogBreed