import React from "react"
import { Formik, Form, Field } from "formik"
import { createNewPost } from "../services/APIHelper"
import { useHistory } from "react-router-dom"

export default function PostForm(props) {
  const { roomId } = props
  const userId = localStorage.getItem("userId")
  const history = useHistory()

  return (
    <>
      <nav className="iphone-size bg-purple-700 text-white flex flex-row justify-between p-3 fixed bottom-0 my-box-shadow">
        <button onClick={() => history.goBack()}>
          <img
            src={require("../assets/Icons/Vector-2.png")}
            alt="back button"
          />
        </button>

        <Formik
          initialValues={{ content: "" }}
          onSubmit={async (values, { resetForm }) => {
            // set new post on backend via helper function
            // need to collect user id from local storage
            let postValues = {
              content: values.content,
              room_id: roomId,
              user_id: userId,
            }
            createNewPost(postValues)
            resetForm()
          }}
        >
          <Form className="flex justify-end w-full text-gray-800">
            <Field
              className="w-9/12 p-2 rounded-lg mr-2"
              name="content"
              placeholder="Say something kind..."
            />
            <button
              className="w-1/10 p-2 text-center bg-yellow-400 rounded"
              type="submit"
            >
              Send
            </button>
          </Form>
        </Formik>
      </nav>
    </>
  )
}
