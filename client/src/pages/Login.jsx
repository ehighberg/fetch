import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Form, Field } from "formik"
import { getUserByEmail } from "../services/APIHelper.js"
import DataDogLogo from "../assets/Icons/DD_white.png"
import Tap from "react-interactions"

export default function Login(props) {
  const history = useHistory()

  return (
    <div className="bg-purple-700 pb-12 flex flex-col items-center">
      <div className="font-poppins text-white uppercase text-center mt-24 mb-8">
        <img className="w-48 ml-6" src={DataDogLogo} alt="logo"></img>
      </div>

      <Formik
        initialValues={{ email: "sam@company.com", password: "password" }}
        onSubmit={async (values, actions) => {
          const userId = await getUserByEmail(values.email)
          if (userId) {
            localStorage.setItem("userId", userId)
            history.push("/")
          } else {
            actions.resetForm()
          }
        }}
      >
        <Form
          id="login-container"
          className="flex flex-col w-4/5 items-center border-2 border-white rounded-lg mt-8"
        >
          <div className="pt-10 font-poppins text-white uppercase text-center text-xl">
            Log in
          </div>
          <div className="pt-16 pb-4 font-poppins text-white text-left w-3/4 text-2xl">
            Email
          </div>
          <Field
            type="email"
            name="email"
            placeholder="email@domain.com"
            className="focus:outline-none bg-white w-3/4 border-transparent rounded-full p-2"
          />
          <div className="py-4 font-poppins text-white text-left w-3/4 text-2xl">
            Password
          </div>
          <Field
            type="password"
            name="password"
            placeholder="password"
            className="focus:outline-none bg-white w-3/4 text-left border-transparent rounded-full p-2"
          />
          <button
            type="submit"
            className="focus:outline-none bg-white w-3/5 text-xl text-purple-700 border-2 border-purple-700 rounded-full py-3 mx-auto mt-16 mb-10"
          >
            <Tap scale waves fade />
            Login
          </button>
        </Form>
      </Formik>
    </div>
  )
}
