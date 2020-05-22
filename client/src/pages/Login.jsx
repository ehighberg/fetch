import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { getUserByEmail } from '../services/APIHelper.js'
import DataDogLogo from '../assets/Icons/DD_white.png'
import Tap from 'react-interactions'

export default function Login(props)
{
    const history = useHistory()

    return (
        <div className="bg-purple-700 h-screen flex flex-col items-center">

            <div className="font-poppins text-white uppercase text-center mt-24 mb-8">
                <img className="w-48 ml-6" src={DataDogLogo}></img>
            </div>
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
                <Form id='login-container' className="flex flex-col w-4/5 items-center border-2 border-white rounded-lg mt-8">
                    <Field type='email' name='email' placeholder="email@domain.com"
                        className=' bg-purple-700 w-3/4 mt-20 border-b text-white'

                    />
                    <Field type='password' name='password' placeholder="password"

                        className=' bg-purple-700 w-3/4 mt-20 border-b text-white'
                    />
                    <button
                        type='submit'
                        className='focus:outline-none bg-white w-3/4 text-purple-700 border-2 border-purple-700 rounded-lg py-8 mx-auto my-8'
                    >
                        <Tap scale waves fade />
                        Login
                    </button>
                </Form>
            </Formik>
        </div >
    )
}
