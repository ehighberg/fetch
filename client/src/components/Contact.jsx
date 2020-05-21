import React from 'react'

export default function Contact(props) {

    let user = props.user

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg'>Contact</div>
            <div className='border-b-2 mx-12 my-3 p-4'>
                {/* need contact message? */}
                <div className='font-bold text-purple-700 text-lg mb-6'>Prefers {user.preferred_contact_method}</div>
                <div className='font-bold text-purple-700 text-lg mb-6'>Average response time: {user.average_response_time_minutes} minutes</div>
                <div>Phone: {user.phone}</div>
                <div>Chat: (room)</div>
                <div>Slack: {user.slack}</div>
                <div>Email: {user.email}</div>
            </div>

            <div className='border-b-2 mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-6'>Request a meeting</div>
                <div>Calendly Link?</div>
            </div>

            <div className='border-b-2 mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-6'>Looking for something simple?</div>
                <div>Tags</div>
            </div>
        </div>
    )
}
