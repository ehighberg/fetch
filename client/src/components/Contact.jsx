import React from 'react'

export default function Contact(props) {

    let user = props.user

    return (
        <div>
            <div className='text-xl flex flex-row justify-between p-6 w-11/12 m-auto'>
                <div>Contact</div>
                <div>Prefers {user.preferred_contact_method}</div>
            </div>

            <div className='border-black border-2 rounded-md mx-12 my-3 p-4'>
                <div className='text-left'>
                    <div>Phone: {user.phone}</div>
                    <div>Slack: {user.slack}</div>
                    <div>Email: {user.email}</div>
                </div>
            </div>

            <div>Average response time: {user.average_response_time_minutes} minutes</div>

            <div>Request a meeting</div>
        </div>
    )
}
