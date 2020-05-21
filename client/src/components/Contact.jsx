import React from 'react'

export default function Contact(props) {

    let user = props.user

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg'>Contact</div>
            <div className='border-b-2 mx-12 my-3 p-4'>
                {/* need contact message? */}
                <div className='font-bold text-purple-700 text-lg mb-6'>Prefers Chat</div>
                <img src={require('../assets/Icons/Chat.png')} alt='contact chat' />
                <div className='font-bold text-purple-700 text-lg mb-6'>Average response time: {user.average_response_time_minutes} minutes</div>
                <div className='flex'>
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
            </div>

            <div className='border-b-2 mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-6'>Request a meeting</div>
                <div>
                  <img src={require('../assets/Icons/Calendar.png')} alt='schedule meeting' />
                </div>
            </div>

            <div className='border-b-2 mx-12 my-3 p-4'>
                <div className='font-bold text-purple-700 text-lg mb-6'>Looking for something simple?</div>
                <div>Tags</div>
            </div>
        </div>
    )
}
