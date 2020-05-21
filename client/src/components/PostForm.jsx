import React from 'react'
import { Formik, Form, Field } from 'formik'
import { createNewPost } from '../services/APIHelper'

export default function PostForm(props)
{
    const { roomId } = props
    const userId = localStorage.getItem('userId')


    return (
        <>
            <Formik
                initialValues={{ content: '' }}
                onSubmit={async (values, { resetForm }) =>
                {
                    // set new post on backend via helper function
                    // need to collect user id from local storage
                    let postValues = {
                        content: values.content,
                        room_id: roomId,
                        user_id: userId
                    }
                    createNewPost(postValues)
                    resetForm()
                }}
            >
                <Form id='postform-container'>
                    <Field className="w-5/6" name="content" placeholder="Say something kind..." />
                    <button className="w-1/6 text-center bg-blue-200 rounded" type='submit'>Send</button>
                </Form>
            </Formik>
        </>
    )
}
