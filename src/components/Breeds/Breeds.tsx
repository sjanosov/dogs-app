import React, { useEffect, useState } from 'react'
import Spinner from '../../common/Spinner';
import { IBreed } from '../../types/types';
import Axios from 'axios';
import Modal from 'react-modal';
import FilteredBreeds from './FilteredBreeds';



function Breeds() {
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [loading, setLoading] = useState(true);
  const [breedToShow, setBreedToShow] = useState<any>();
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: "black"
    },
  };


  //Modal window
  function openModal(breed: IBreed) {
    setIsOpen(true);
    setBreedToShow(breed);
  }

  function closeModal() {
    setIsOpen(false);
  }


  //Filtering breeds
  const filteredDogs = breeds.filter(breed => {
    return breed.name.toLowerCase().includes(query.toLowerCase());
  })

  const fetchedBreedData = () => Axios.get(`https://api.thedogapi.com/v1/breeds`)
    .then(res => {
      setBreeds(res.data)
      console.log(res.data)
      setLoading(false);
    })

  useEffect(() => {
    fetchedBreedData();
  }, [])

  const queryFunction = (q: string) => {
    setQuery(q)
  }
  
  return (
    <main>
      {loading ? <Spinner /> : <>
        <div className="main-content">
          <FilteredBreeds filteredDogs={filteredDogs} queryFunction={queryFunction} openModal={openModal} />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className="row justify-content-flex-end">
              <button className="close-button" onClick={closeModal}>X</button>
            </div>

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
          </Modal>
        </div></>}
    </main>
  )
}

export default Breeds