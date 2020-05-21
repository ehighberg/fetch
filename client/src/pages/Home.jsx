import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory, Link } from 'react-router-dom'

import { getUserByEmail } from '../services/APIHelper.js'
import SearchBar from '../components/SearchBar'

export default function Home(props)
{
    const history = useHistory()

    return (
        <div className="bg-purple-700">
            <div className="text-5xl text-indigo-400 font-bold text-center">
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
                <Form id='login-container' className="">
                  <label>Email</label>
                  <Field type='email' name='email' placeholder="email@domain.com"/>
                  <label>Password</label>
                  <Field type='password' name='password' placeholder="password"/>
                  <button type='submit'>Login</button>
                </Form>
              </Formik>
            )}

            {localStorage.getItem('userId') && (
              <div>
                <SearchBar
                  setSearchResults={props.setSearchResults}
                />
                <h1>Company Directory</h1>
                <Link to='/teams'>
                  <p>Teams</p>
                  <p>ARROW ICON</p>
                </Link>
                <Link to='/users'>
                  <p>People</p>
                  <p>ARROW ICON</p>
                </Link>
              </div>
            )}

            <button onClick={() => {
                localStorage.removeItem('userId')
                history.push('/')
              }}>Logout</button>
        </div>
    )
}
