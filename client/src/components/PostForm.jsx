import React from 'react'
import { Formik, Form, Field } from 'formik'
import { createNewPost } from '../services/APIHelper'

export default function PostForm()
{
    return (
        <>
            <Formik
                initialValues={{ post: '' }}
                onSubmit={async (values) =>
                {
                    // set new post on backend via helper function
                    // need to collect user id from local storage
                }}
            >
                <Form id='postform-container'>
                    <Field className="w-5/6" name='post' placeholder="Say something kind..." />
                    <button className="w-1/6 text-center bg-blue-200 rounded" type='submit'>Send</button>
                </Form>
            </Formik>
        </>
    )
}
