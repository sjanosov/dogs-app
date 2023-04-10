import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Radio, Select, TextField, } from '@mui/material';
import Button from '@mui/material/Button';
import { Field, FieldAttributes, Form, Formik, useField, useFormik } from 'formik';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PanelBody from './PanelBody'
import * as Yup from 'yup';
import { dogsForAdoption } from '../constants/dogsForAdoption';
import { breeds } from '../constants/breeds';
import { FilteredDogsType } from '../constants/filteredDogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Adoption() {

  const [selectedBreed, setSelectedBreed] = useState<string | null>("");
  const [selectedAge, setSelectedAge] = useState<number | null>(0);
  const [selectedAgeInString, setSelectedAgeInString] = useState<string | null>("");
  const [selectedGender, setSelectedGender] = useState<string | null>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [autoSelectValue, setAutoSelectValue] = useState<string | null>("");

  const SignupSchema = Yup.object().shape({
    gender: Yup.string()
      .required("Select gender"),
    age: Yup.string()
      .required("Select age"),
    breed: Yup.string()
      .required("Select breed"),

  })

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
  const noDog = () => toast.error("No such a dog for adoption. 🐶")


  const handleSubmit = (values: FilteredDogsType) => {
    setSelectedAge(values.age);
    setSelectedAgeInString(values.ageInString);
    setSelectedGender(values.gender);
    setSelectedBreed(values.breed);
    setAutoSelectValue(values.breed);
    console.log(getFilteredBreed().length)
    getFilteredBreed().length == 0 && noDog();
  };


  return (
    <main className="main-content">

      <PanelBody title="Pawfect Companions">
        <p className="sub-title">
          Adopting a dog not only provides a loyal friend but also saves a life. It's often more affordable than buying from a breeder and has health benefits like lowering stress levels and improving mood. Consider adopting a furry pal today.
        </p>
        <Formik
          initialValues={{
            gender: '',
            age: 0,
            ageInString: '',
            breed: ''
          }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
          validateOnChange={true}
        >

          {({ errors, touched, values, isSubmitting, handleChange, setFieldValue }) => (

            <Form>
              <div className="row">
                <div className="col-4">
                  <div id="gender-rg">Gender</div>
                  <div role="group" aria-labelledby="gender-rg">
                    <label>
                      <Field type="radio" name="gender" value="Female" as={Radio} />
                      Female
                    </label>
                    <label>
                      <Field type="radio" name="gender" value="Male" as={Radio} />
                      Male
                    </label>
                    {errors.gender && touched.gender ? <div className="error">{errors.gender}</div> : null}
                    <div>Picked: {values.gender}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div id="age-rg">Age</div>
                  <div role="group" aria-labelledby="age-rg">
                    <label>
                      <Field type="radio" name="ageInString" value="Puppy" as={Radio} />
                      0 - 1 year
                    </label>
                    <label>
                      <Field type="radio" name="ageInString" value="Young" as={Radio} helper error={true} />
                      2 - 6 year
                    </label>
                    <label>
                      <Field type="radio" name="ageInString" value="Old" as={Radio} />
                      7 year and older
                    </label>
                    {errors.ageInString && touched.ageInString ? <div className="error">{errors.ageInString}</div> : null}

                    <div>Picked: {values.ageInString}</div>
                  </div>
                </div>
                <div className="col-3">
                  <Autocomplete
                    id="breed"
                    options={breeds}

                    fullWidth
                    value={autoSelectValue}
                    onChange={(e, newVal) => {
                      setAutoSelectValue(newVal)
                      setFieldValue("breed", newVal)

                    }}
                    renderInput={params => (
                      <TextField
                        color="primary"
                        margin="normal"
                        label="Breed"
                        name="breed"
                        {...params}
                      />
                    )}
                  />
                  picked: {values.breed}
                  {errors.breed && touched.breed ? <div className="error">{errors.breed}</div> : null}
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-right">
                  <Button type="submit" >Sniff it</Button>
                </div>
              </div>
            </Form>

          )}
        </Formik>

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