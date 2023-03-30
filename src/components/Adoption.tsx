import { Radio } from '@mui/material';
import Button from '@mui/material/Button';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom'
import PanelBody from './PanelBody'

function Adoption() {

  return (
     <main className="main-content">
      <PanelBody title="Pawfect Companions: Find Your Furry Friend at Our Dog Adoption Page">
        <p className="sub-title">
          Adopting a dog not only provides a loyal friend but also saves a life. It's often more affordable than buying from a breeder and has health benefits like lowering stress levels and improving mood. Consider adopting a furry pal today.        
        </p>
        <Formik
      initialValues={{
        gender: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div id="my-radio-group">Gender</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="Female" as={Radio}/>
              Female
            </label>
            <label>
              <Field type="radio" name="gender" value="Male" as={Radio}/>
              Male
            </label>
            <div>Picked: {values.gender}</div>
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