import { Autocomplete, Button, Radio, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { FilteredDogsType } from '../../constants/filteredDogs';
import { breeds } from '../../constants/breeds';

export interface IAdoptionFilterProps {
    handleSubmit: (values: FilteredDogsType) => void;
    autoSelectValue: string | null;
    setAutoSelectValue: (val: string | null) => void;
    submitting: boolean;
}

function AdoptionFilter({handleSubmit, autoSelectValue, setAutoSelectValue, submitting}: IAdoptionFilterProps) {

    const SignupSchema = Yup.object().shape({
        gender: Yup.string()
        .required("Select gender"),
        ageInString: Yup.string()
        .required("Select age"),
        breed: Yup.string()
        .required("Select breed"),
    })
    


  return (
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
              <div className="row justify-content-space-between">
                <div className="col gender">
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
                <div className="col age">
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
                <div className="col breed">
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
              <div className="row justify-content-flex-end">
                <div>
                  <Button  type="submit" disabled={submitting}>Sniff it</Button>
                </div>
              </div>
            </Form>

          )}
        </Formik>
  )
}

export default AdoptionFilter