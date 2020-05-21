import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory, Link } from 'react-router-dom'

import { getUserByEmail } from '../services/APIHelper.js'
import SearchBar from '../components/SearchBar'

export default function Home(props)
{
    const history = useHistory()

    return (
        <div className="text-center bg-gray-100">
            <div className="bg-purple-700 text-5xl text-yellow-400 font-bold text-center">
                Fetch
            </div>

            {!localStorage.getItem('userId') && (
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={ async (values, actions) => {
                  const userId = await getUserByEmail(values.email)
                  if (userId) {
                    localStorage.setItem('userId', userId)
                    history.push('/')
                  } else {
                    actions.resetForm()
                  }
                }}
              >
                <Form id='login-container' className="flex flex-col mt-32">
                  {/* <label>Email</label> */}
                  <Field type='email' name='email' placeholder="email@domain.com" className='bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto' />
                  {/* <label>Password</label> */}
                  <Field type='password' name='password' placeholder="password" className='bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto mt-8' />
                  <button type='submit' className='bg-purple-700 text-white border-2 border-purple-700 rounded-full w-1/4 p-2 mx-auto mt-8'>Login</button>
                </Form>
              </Formik>
            )}

            {localStorage.getItem('userId') && (
              <div>
                <SearchBar
                  setSearchResults={props.setSearchResults}
                />
                <div className='text-4xl text-purple-700'>Company Directory</div>
                <Link to='/teams' className='flex flex-row w-3/5 text-3xl mx-auto justify-between border-b-2 my-4'>
                  <div>Teams</div>
                  <div>ICON</div>
                </Link>
                <Link to='/users' className='flex flex-row w-3/5 text-3xl mx-auto justify-between border-b-2 my-4'>
                  <div>People</div>
                  <div>ICON</div>
                </Link>
              </div>
            )}

            <button onClick={() => {
                localStorage.removeItem('userId')
                history.push('/')
              }} className='bg-purple-700 text-white border-2 border-purple-700 rounded-full w-1/4 p-2 mx-auto mt-8'>Logout</button>
        </div>
    )
}
