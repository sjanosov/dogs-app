import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Radio, Select, TextField, } from '@mui/material';
import Button from '@mui/material/Button';
import { Field, FieldAttributes, Form, Formik, useField, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PanelBody from './PanelBody'
import { dogsForAdoption } from '../constants/dogsForAdoption';
import { breeds } from '../constants/breeds';
import { FilteredDogsType } from '../constants/filteredDogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdoptionFilter from './Adoption/AdoptionFilter';


function Adoption() {

  const [selectedBreed, setSelectedBreed] = useState<string | null>("");
  const [selectedAge, setSelectedAge] = useState<number | null>(0);
  const [selectedAgeInString, setSelectedAgeInString] = useState<string | null>("");
  const [selectedGender, setSelectedGender] = useState<string | null>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [autoSelectValue, setAutoSelectValue] = useState<string | null>("");
  const noDog = () => {
    toast.error("No such a dog for adoption. 🐶");
  };

  const handleSubmit = (values: FilteredDogsType) => {
    console.log("handleSubmitcalled")
    setSelectedAge(values.age);
    setSelectedAgeInString(values.ageInString);
    setSelectedGender(values.gender);
    setSelectedBreed(values.breed);
    setAutoSelectValue(values.breed);
    console.log(getFilteredBreed().length)
    getFilteredBreed().length == 0 && noDog() 
    

      };
  function getFilteredBreed() {
    return dogsForAdoption.filter(dog => (dog.breed == selectedBreed && dog.gender == selectedGender && dog.ageinString == selectedAgeInString)).map(dog => (
      <div className="dog-card" key={dog.id}>
        <div className="dog-portrait">
          <img src={require(`../images/${dog.imageUrl}.jpg`)} />
        </div>
        <div className="dog-info">
          <div className="dog-header">
            <div className="dog-name-age">
              <div className="left-side">
                <FontAwesomeIcon icon={faShieldDog} className="fa-shield-icon" />
                <h3 className="dog-name">{dog.name}</h3>
                <span className="dog-age"> , {dog.age} {dog.age == 1 ? "year" : "years"}</span>
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
    ))
  }

console.log(submitting)
  


  return (
    <main className="main-content">

      <PanelBody title="Pawfect Companions">
        <p className="sub-title">
          Adopting a dog not only provides a loyal friend but also saves a life. It's often more affordable than buying from a breeder and has health benefits like lowering stress levels and improving mood. Consider adopting a furry pal today.
        </p>
        {/* <AdoptionFilter selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} selectedAge={selectedAge} setSelectedAge={setSelectedAge} selectedAgeInString={selectedAgeInString} setSelectedAgeInString={setSelectedAgeInString} selectedGender={selectedGender} setSelectedGender={setSelectedGender} autoSelectValue={autoSelectValue} setAutoSelectValue={setAutoSelectValue}/> */}
        <AdoptionFilter  handleSubmit={handleSubmit} autoSelectValue={autoSelectValue} setAutoSelectValue={setAutoSelectValue} submitting={submitting}/>
        <>{getFilteredBreed()}</>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          style={{bottom: "-7.5em"}}
           />
        {/* <SearchedDogs /> */}


      </PanelBody>
    </main>
  )
}

export default Adoption