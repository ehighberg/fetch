import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { getUserByEmail } from '../services/APIHelper.js'

export default function Login(props)
{
    const history = useHistory()

    return (
        <div className="bg-purple-700 h-screen flex flex-col">

            <div className=" font-poppins text-white uppercase text-center my-32">Data Dog Logo</div>
            <div className=" font-poppins text-white uppercase text-center">Log in</div>


            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values, actions) =>
                {
                    const userId = await getUserByEmail(values.email)
                    if (userId)
                    {
                        localStorage.setItem('userId', userId)
                        history.push('/')
                    } else
                    {
                        actions.resetForm()
                    }
                }}
            >
                <Form id='login-container' className="flex flex-col items-center border-2 border-white mx-10 rounded-lg mt-10">
                    {/* <label>Email</label> */}
                    <Field type='email' name='email' placeholder="email@domain.com"
                        // className='bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto'
                        className=' bg-purple-700 w-3/4 mt-20 border-b'
                    />
                    {/* <label>Password</label> */}
                    <Field type='password' name='password' placeholder="password"
                        // className='bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto mt-8'
                        className=' bg-purple-700 w-3/4 mt-20 border-b'
                    />
                    <button type='submit'
                        className='bg-white w-3/4 text-purple-700 border-2 border-purple-700 rounded-lg py-8 mx-auto my-8'>Login</button>
                </Form>
            </Formik>
        </div >
    )
}
