import React from 'react'

export default function Contact(props) {

    let user = props.user

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg'>Contact</div>
            <div className='my-4'>Contact message...</div>
                <div className='font-bold text-purple-700 text-lg mb-6'>Prefers {user.preferred_contact_method}</div>
                <div className='text-center m-auto mb-4 bg-gray-300 w-16 h-16 rounded-full'>{user.preferred_contact_method}</div>

                <div className='font-bold text-purple-700 text-lg mb-6'>Average response time: {user.average_response_time_minutes} minutes</div>

                <div className='flex flex-row justify-evenly w-11/12 mx-auto mb-6'>
                    <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>Phone</div>
                    <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>Chat</div>
                    <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>Slack</div>
                    <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>Email</div>

                {/* <div>Phone: {user.phone}</div>
                <div>Chat: (room)</div>
                <div>Slack: {user.slack}</div>
                <div>Email: {user.email}</div> */}
                
            </div>

            <div id='border' className='w-1/2 mx-auto h-px bg-gray-500'></div>

            <div className='mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-4'>Request a meeting</div>
                <div>Calendly Link?</div>
            </div>

            <div id='border' className='w-1/2 m-auto h-px bg-gray-500'></div>

            <div className='mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-4'>Looking for something simple?</div>
                <div>Tags</div>
            </div>

        </div>
    )
}
