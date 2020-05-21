import React from 'react'

export default function Contact(props) {

    let user = props.user

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg'>Contact</div>

            <div className='my-4'>Contact message...</div>
                <div className='font-bold text-purple-700 text-lg mb-6'>Prefers {user.preferred_contact_method}</div>
                <img src={require('../assets/Icons/Chat.png')} alt='contact chat' />

                <div className='font-bold text-purple-700 text-lg mb-6'>Average response time: {user.average_response_time_minutes} minutes</div>

                <div className='flex flex-row justify-evenly w-11/12 mx-auto mb-6'>
                   <div>
                    <img src={require('../assets/Icons/Phone.png')} alt={`Phone: ${user.phone}`} />
                  </div>
                     <div>
                    <img src={require('../assets/Icons/Chat.png')} alt={`Chat: (room)`} />
                  </div>
                    <div>
                    <img src={require('../assets/Icons/Video.png')} alt={`Slack: ${user.slack}`} />
                  </div>
                    <div>
                    <img src={require('../assets/Icons/Video.png')} alt={`Email: ${user.email}`} />
                  </div>
                
            </div>

            <div id='border' className='w-1/2 mx-auto h-px bg-gray-500'></div>

            <div className='mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-4'>Request a meeting</div>
                <div>
                  <img src={require('../assets/Icons/Calendar.png')} alt='schedule meeting' />
                </div>

            </div>

            <div id='border' className='w-1/2 m-auto h-px bg-gray-500'></div>

            <div className='mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-4'>Looking for something simple?</div>
                <div>Tags</div>
            </div>

        </div>
    )
}
