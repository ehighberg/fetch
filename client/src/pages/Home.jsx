import React from 'react'
import { Formik, Form, Field } from 'formik'

import { getUserByEmail } from '../services/APIHelper.js'

export default function Home()
{
    return (
        <div className=" bg-blue-600">
            <div className="text-5xl text-indigo-400 font-bold text-center">
                App Name
            </div>
            <Formik
              initialValues={{ email: '', password: ''}}
              onSubmit={async (values) => {
                const userId = await getUserByEmail(values.email)
                localStorage.setItem('userId', userId)
              }}
            >
              <Form id='login-container'>
                <Field type='email' name='email' />
                <Field type='password' name='password' />
                <button type='submit'>Login</button>
              </Form>
            </Formik>
        </div>
    )
}
