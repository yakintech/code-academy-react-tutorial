import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react';

import { addCategorySchema } from './addCategoryValidation';

function FormikSample() {


    
    return (<>
        <Formik
            initialValues={{
                name: '',
                description: ''
            }}
            validationSchema={addCategorySchema}
            onSubmit={(values) => {

                axios.post('https://northwind.vercel.app/api/categories', values)
                    .then(res => {
                        console.log('RESPONSE', res.data);
                    })
            }}
        >

            {({ errors, touched }) => {
                console.log('Errors', errors);
              return  <Form>
                    {
                        errors.name && <span style={{color:'tomato'}}>{errors.name}</span>
                    }
                    <label htmlFor="name">Name</label>
                    <Field name="name" placeholder="name..." />

                    <label htmlFor="firstName">Description</label>
                    <Field name="description" placeholder="description..." />

                    <button type="submit">Submit</button>
                </Form>
            }}


        </Formik>
    </>
    )
}

export default FormikSample