import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Radio, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Field, FieldAttributes, Form, Formik, useField } from 'formik';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PanelBody from './PanelBody'
import * as Yup from 'yup';
import { dogsForAdoption } from '../constants/dogsForAdoption';

type MyRadioProps = { label: string } & FieldAttributes<{}>;

function Adoption() {

  const [breed, setBreed] = useState("");


  const handleChange = (value: any) => {
    // Here is the value is a selected option label or the new typed value
    setBreed(value);
  }
  // const [field, meta] = useField<{}>();
  // const MyRadio: React.FC<MyRadioProps> = ({label, ...props}) => {
  //   const [field] = useField<{}>(props);
  //   return (

  //   )
  // } 

  const SignupSchema = Yup.object().shape({
    gender: Yup.string()
      .required("Select gender"),

  });

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
            breed: 'Select breed'
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={SignupSchema}
        >
          {({ errors, touched, values, isSubmitting }) => (
            <Form>
              <div className="row">
                <div className="col-3">
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
                <div className="col-3">
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
                    <div>Picked: {values.age}</div>
                  </div>
                </div>
                <div className="col-3 text-right">
                  <Autocomplete
                    id="breed"
                    options={dogsForAdoption}
                    getOptionLabel={option => option.breed}
                    fullWidth
                    onChange={(e, value) => {
                      console.log(value);
                      handleChange(value);
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
                </div>
              </div>





              <Button type="submit" disabled={isSubmitting}>Submit</Button>
            </Form>
          )}
        </Formik>



      </PanelBody>
    </main>
  )
}

export default Adoption