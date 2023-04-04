import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Radio, Select, TextField, } from '@mui/material';
import Button from '@mui/material/Button';
import { Field, FieldAttributes, Form, Formik, useField, useFormik } from 'formik';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PanelBody from './PanelBody'
import * as Yup from 'yup';
import { dogsForAdoption } from '../constants/dogsForAdoption';
import { breeds } from '../constants/breeds';
import SearchedDogs from './SearchedDogs';
import { FilteredDogsType } from '../constants/filteredDogs';


function Adoption() {

  const [selectedBreed, setSelectedBreed] = useState<string | null>("");
  const [selectedAge, setSelectedAge] = useState<number | null>(0);
  const [selectedGender, setSelectedGender] = useState<string | null>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const SignupSchema = Yup.object().shape({
    gender: Yup.string()
      .required("Select gender"),
    age: Yup.string()
      .required("Select age"),
    breed: Yup.string()
      .required("Select breed"),

  });

  // function getFilteredDogs(val: FilteredDogsType) {
  //   return (
  //     <div>{val.age}</div>
  //   )
  // }

  const handleSubmit = (values: FilteredDogsType) => {
    // Do something with the form values
    console.log(values);
   
  
    // // Call setSubmitting to indicate that the form submission is complete
    // setSubmitting(false);
  };
  
  return (
    <main className="main-content">
      
      <PanelBody title="Pawfect Companions">
        <h2>Find Your Furry Friend at Our Dog Adoption Page</h2>
        <p className="sub-title">
          Adopting a dog not only provides a loyal friend but also saves a life. It's often more affordable than buying from a breeder and has health benefits like lowering stress levels and improving mood. Consider adopting a furry pal today.
        </p>
        <Formik
          initialValues={{
            gender: '',
            age: '',
            breed: ''
          }}
          // onSubmit={async (values: FilteredDogsType) => {
          //   await new Promise((r) => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
          // }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
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
                    {errors.gender  && touched.gender ? <div className="error">{errors.gender}</div> : null}
                    <div>Picked: {values.gender}</div>
                  </div>
                </div>
                <div className="col-4">
                  <div id="age-rg">Age</div>
                  <div role="group" aria-labelledby="age-rg">
                    <label>
                      <Field type="radio" name="age" value="Puppy" as={Radio} />
                      0 - 1 year
                    </label>
                    <label>
                      <Field type="radio" name="age" value="Young" as={Radio} helper error={true} />
                      2 - 6 year
                    </label>
                    <label>
                      <Field type="radio" name="age" value="Old" as={Radio} />
                      7 year and older
                    </label>
                    {errors.age && touched.age ? <div className="error">{errors.age}</div> : null}

                    <div>Picked: {values.age}</div>
                  </div>
                </div>
                <div className="col-3">
                  <Autocomplete
                    id="breed"
                    options={breeds}
                    getOptionLabel={option => option}
                    fullWidth
                    value={selectedBreed}
                    onChange={(e, newValue) => {
                      setSelectedBreed(newValue);
                      setFieldValue("breed", newValue)
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
                  
                  {errors.breed && touched.breed ? <div className="error">{errors.breed}</div> : null}

                </div>
              </div>



              <div className="row">
                <div className="col-12 text-right">
                  <Button type="submit" disabled={isSubmitting}>Sniff it</Button>
                </div>
              </div>

              {values.age}
            </Form>
            
          )}
        </Formik>
        
       
                      <SearchedDogs />


      </PanelBody>
    </main>
  )
}

export default Adoption