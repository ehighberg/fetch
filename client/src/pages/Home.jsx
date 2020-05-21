import React from 'react'

import { useHistory, Link } from 'react-router-dom'

// import { getUserByEmail } from '../services/APIHelper.js'
import SearchBar from '../components/SearchBar'

export default function Home(props)
{
  const history = useHistory()

  return (
    <div className="flex flex-col items-center text-center bg-gray-100">
      <div className=" font-poppins my-6 text-purple-700 text-2xl uppercase">
        Home
      </div>
      <div className="bg-purple-700 w-40 h-40">
        Placeholder
      </div>
      <div className=" font-poppins mt-2 text-purple-700 text-4xl uppercase">
        Datadog
      </div>

      {/* {!localStorage.getItem('userId') && (
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
          <Form id='login-container' className="flex flex-col mt-32">
            <label>Email</label>
            <Field type='email' name='email' placeholder="email@domain.com" className='bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto' />
            <label>Password</label>
            <Field type='password' name='password' placeholder="password" className='bg-white border-2 border-purple-700 rounded-full w-3/4 p-4 mx-auto mt-8' />
            <button type='submit' className='bg-purple-700 text-white border-2 border-purple-700 rounded-full w-1/4 p-2 mx-auto mt-8'>Login</button>
          </Form>
        </Formik>
      )} */}

      {localStorage.getItem('userId') && (
        <div className="w-full px-8">
          <SearchBar
            setSearchResults={props.setSearchResults}
          />
          <div className='text-2xl font-poppins mt-6 text-purple-700'>Company Directory</div>
          <div className='mt-4'>
            <Link to='/teams' className='flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6'>
              <div className="font-bold">Departments</div>
              <div>ICON</div>
            </Link>
            <Link to='/teams' className='flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6'>
              <div className="font-bold">Teams</div>
              <div>ICON</div>
            </Link>
            <Link to='/users' className='flex flex-row w-4/5 text-2xl font-roboto text-purple-700 mx-auto justify-between border-b-2 py-6'>
              <div className="font-bold">People</div>
              <div>ICON</div>
            </Link>
          </div>
          <div className='text-2xl font-poppins my-8 text-purple-700'>Recent Chats</div>
          <div className=" overflow-x-scroll">
            <div className="inline-flex">
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
            </div>
          </div>
          <div className='text-2xl font-poppins my-8 text-purple-700'>Your Team</div>
          <div className=" overflow-x-scroll">
            <div className="inline-flex">
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
              <div className="m-2 rounded-full w-20 h-20 bg-purple-700"></div>
            </div>
          </div>
        </div>
      )}

      <button onClick={() =>
      {
        localStorage.removeItem('userId')
        history.push('/')
      }}
        className='bg-purple-700 text-white border-2 border-purple-700 rounded-full w-1/4 p-2 mx-auto mt-8'
      >
        Logout
        </button>
    </div>
  )
}
