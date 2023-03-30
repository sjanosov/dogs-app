import React, { useCallback, useEffect, useState } from 'react'
import Spinner from '../common/Spinner';
import { IBreed, IDogbreedProps } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { getSuggestedQuery } from '@testing-library/react';
import Axios from 'axios';
import { Search } from '../common/Search';


function Breeds() {
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [breedToShow, setBreedToShow] = useState<any>();
  const [query, setQuery] = useState('');




  // const getBreeds = useCallback(async () => {
  //   console.log(loading)

  //   setLoading(true);
  //   const api = await fetch(`https://api.thedogapi.com/v1/breeds`)
  //   const data = await api.json();

  //   setBreeds(data);
  //   setLoading(false);
  //   //handleObserver();



  // }, [])

  //Filtering breeds
  const filteredDogs = breeds.filter(breed => {
    return breed.name.toLowerCase().includes(query.toLowerCase());
  })







  const fetchedBreedData = () => Axios.get(`https://api.thedogapi.com/v1/breeds`)
  .then(res => {
    setBreeds(res.data)
    console.log(breeds)
    setLoading(false);
  })

    
    fetchedBreedData();
    // const breedList = document.querySelectorAll(".card");
    // const observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     console.log(entry)
    //     entry.target.classList.toggle("show", entry.isIntersecting);
    //     if (entry.isIntersecting) observer.unobserve(entry.target)
    //   })
    // }, {
    //   threshold: .9,
    // })
    // breedList.forEach(breed => {
    //   observer.observe(breed);
    // })




  function handleLightbox(breed: any) {
    setLightboxOpen(true);
    setBreedToShow(breed);

  }

  function closeLightbox() {
    setLightboxOpen(false);
  }


  const queryFunction = (q: string) => {
    setQuery(q)
  }
  return (
    //<motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }} >
    <main>

      <div className="main-content">
        <div className="breeds-container">
          {loading ? <Spinner /> : <>
            <Search getQuery={queryFunction} />

            <div className="breeds-inner-container">

              {filteredDogs.length ? filteredDogs?.map((breed: IBreed) => {
                return (
                  <div className="card" key={breed.id} onClick={() => handleLightbox(breed)}>
                    <div className="card-top">
                      <img src={breed.image.url} loading="lazy" />
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
                  </div>)
              })
                : <p>Ooops no such a breed...</p>}


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
            </div>
          </>}
        </div>
      </div>
    </main>
    //</motion.div>
  )
}

export default Breeds