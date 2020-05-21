import React from 'react'

export default function SocialActivity(props) {
    return (
        <div>
            <div className='font-bold text-purple-700 text-lg mt-10'>Recent Social Activity</div>
            <div className='border-b-2 mx-12 p-4'>
              <img src={require('../assets/social1.png')} alt='social media post' />
              <img src={require('../assets/social2.png')} alt='social media post' />
            </div>
        </div>
    )
}
